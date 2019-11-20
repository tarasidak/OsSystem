class SwapiService {
    async getResource(){
        const res = await fetch(`https://jsonplaceholder.typicode.com`);
        if(!res.ok){
            throw new Error(`Could not fetch ${`https://jsonplaceholder.typicode.com`}`)
        }
        return await res.json();
        }
    getAllPhotos(){
        return this.getResource(`https://jsonplaceholder.typicode.com/albums/1/photos`);
    }
}

const swapi = new SwapiService();

swapi.getAllPhotos().then((body) => {
    console.log(body);
});
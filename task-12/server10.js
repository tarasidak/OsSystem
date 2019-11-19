// node server10.js
// http://localhost:3000/task10
const express = require ('express');
const axios = require ('axios');
const port = 3000;
const app = express();

app.get('/task10', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response){
        res.send(response.data);
    })
    .catch(function(error){
        res.status(404).send("Some Error");
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000;
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let animals = [
    {
        id: 1,
        name: 'Wolf'
    },
    {
        id: 2,
        name: 'Fox'
    },
    {
        id: 3,
        name: 'Rabbit'
    }
];

app.get('/', (req, res, next) => {
    res.send('Hello');
})

app.get('/animals', (req, res, next) => {
    res.send(animals);
})

app.get('/animals/:id', (req, res, next) => {
    let animal = animals.find((animal)  => {
        return animal.id === Number(req.params.id)
    });
    res.send(animal);
})

app.post('/animals', (req, res) => {
    let animal = {
        id: Date.now(),
        name: req.body.name
    }
    animal.push(animal)
    res.send(animal);
})

app.put('/animals/:id', (req, res, next) => {
    let animal = animals.find((animal)  => {
        return animal.id === Number(req.params.id)
    });
    animal.name = req.body.name;
    res.send(animal);
})

app.delete('/animals/:id', (req, res, next) => {
    animals = animals.filter ((animal) => {
        return animal.id !== Number(req.params.id);
    })
    res.sendStatus(200);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
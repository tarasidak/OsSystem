const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

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

app.get('/task4', (req, res, next) => {
    res.send(animals);
})

app.post('/task4', (req, res) => {
    let animal = {
        id: Date.now(),
        name: req.body.name
    }
    animal.push(animal)
    res.send(animal);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
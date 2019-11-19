//node server3.js
var express = require('express')
const port = 3000;
var app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/task3', (req, res, next) => {
    let num = req.body;
    if(num.match(/^-{0,1}\d+$/)){
        let multiply = (num*num).toString();
        res.send(multiply); 
    } else {
        res.status(404).send('This is not a number');
    }
});
    


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
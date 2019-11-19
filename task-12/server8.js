// node server8.js
// http://localhost:3000/task8?type=json    
// or
// http://localhost:3000/task8?type=text

const express = require('express');
const port = 3000;
const app = express();

const myGreet = {Greeting : 'Hello my friend'};

app.get('/task8', (req, res, next) => {
    if(req.query.type === 'text'){
        res.send(myGreet);
    } else if(req.query.type === 'json'){
        res.json(myGreet);
    } else {
        res.send("Some error"); 
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
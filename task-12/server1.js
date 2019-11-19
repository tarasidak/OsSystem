// node server1.js
// http:/localhost:3000/task1?num=3

const express = require ('express');
const port = 3000;
const app = express();

app.get('/task1', (req, res, next) => {
    let num = req.query.num;
    if(num.match(/^-{0,1}\d+$/)){
        let multiply = (num*num).toString();
        res.send(multiply);
    } else {
        res.status(404).send('This is not a number');
    }
     
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
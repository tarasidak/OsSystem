//node server2.js
// http://localhost:3000/task2/7

const express = require ('express');
const port = 3000;
const app = express();


app.get('/task2/:num', (req, res, next) => {
    const num = req.params.num;
    if(num.match(/^-{0,1}\d+$/)){
        let multiply = (num*num).toString();
        res.send(multiply); 
    } else {
        res.status(404).send('This is not a number');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
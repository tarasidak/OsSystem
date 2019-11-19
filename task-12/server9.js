// node server9.js
// http://localhost:3000/task9

const express = require('express');
const port = 3000;
const app = express();
const fs = require("fs");

app.get('/task9', (req, res, next) =>{
    fs.readFile("myfile.txt", "utf8",
        function(error, data){
            if(error){
                return res.status(404).json(
                    "Some Error"
                )
            } 
            res.send(data);
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
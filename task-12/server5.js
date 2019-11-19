// node server5.js
// http://localhost:3000/task5/photo.png
// http://localhost:3000/task5/index.html

const express = require ('express');
const port = 3000;
const app = express();


app.use('/task5', express.static(__dirname + '/photo')); 

app.use('/task5', express.static(__dirname + '/somepage')); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// node server7.js
// http://localhost:3000/task7/user1

const express = require('express');
const port = 3000;
const app = express();

app.get('/task7/user1', (req, res, next) => {
    res.redirect('/task7/user2')
});

app.get('/task7/user2', (req, res, next) => {
    res.send('Hello, but you are second user!!!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
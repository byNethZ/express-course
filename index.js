const express = require('express');
const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.get('/contact', (req, res) => {
    res.send('Contact us, contactanos');
});

app.get('/info', (req, res) => {
    res.send('Info');
});

app.listen(Port, () =>{
    console.log(`Server listening on ${Port}`);
});
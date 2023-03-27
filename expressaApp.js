const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("data sent by browser =>>>>>>>", req.query.name);
    res.send(`<h1>This is Home page</h1>
    <a href ="/about">Go to about page</a>
    `);
})

app.get('/about', (req, res) => {
    res.send(`<input type ="text" placeholder = "Enter the text"/>
    <button>Click here</button>
    <a href = "/">Go to home page</a>
    `)
})

app.listen(5000);
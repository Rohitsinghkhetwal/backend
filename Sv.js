const express = require('express');
const path = require('path');

const app = express();
const dirpath = path.join(__dirname, 'Pages');

app.set('view engine', 'ejs');

app.get('', (req, resp) => {
    resp.sendFile(`${dirpath}/index.html`)
})

app.get('/profile', (req, resp) => {
    const users = {
        name: "rohit Singh",
        grad: "btech",
        email: "RohitSingh@gmail.com",
        id: "2323232",
        skills: ['react', 'c', 'node', 'postgres','react-native']
    }
    resp.render('profile',{users})
})




app.get('/About', (req, resp) => {
    resp.sendFile(`${dirpath}/Aboutus.html`)
})


app.get('*', (req, resp) => {
    resp.sendFile(`${dirpath}/nopage.html`)
})



app.listen(5000);
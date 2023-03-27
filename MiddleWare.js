const express = require('express');
const app = express();


const appFilter = (req, resp, next) => {
    if(!req.query.age){
        resp.send("Please provide the age first")
    } else if(req.query.age< 18) {
        resp.send("You are not accessible to this page");
    } else {
        next();
        
    }
}


 
app.get('/', (req, resp) => {
    resp.send('Welcome to homepage')
})

app.get('/users', (req, resp) => {
    resp.send('This is users Page')
})

app.get('/about',appFilter, (req, resp) => {
    resp.send('Welcome to Aboout page')
})

app.listen(4000);
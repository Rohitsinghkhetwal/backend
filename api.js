const express = require('express');
const Data = require('./mongodb3');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let data =  await Data();
    data = await data.find().toArray();
    resp.send({data})

})

app.post('/', async (req, resp) => {
    let data = await Data();
    let result = await data.insertOne(req.body);
    resp.send(result);
    

})

app.put('/', async (req, resp) => {
    let data = await Data();
    let result = await data.updateOne(
        {name : "Nokia c2"},
        {$set: {name: "redmi Note 13 pro"}}
    )
    resp.send({result: "update"});
   
})

app.delete('/:id', async(req, resp) => {
    console.log(req.params.id);
    let data = await Data();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5000);
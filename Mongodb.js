const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const connection = new MongoClient(url);
const data = 'Shoe-Com';

async function getData() {
    let result = await connection.connect();
    let db = result.db(data);
    let collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
    

}
getData();
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const app = new MongoClient(url);
const DataBaseName = 'Shoe-Com'

 async function Data() {
    let client = await app.connect();
    db = client.db(DataBaseName);
    return db.collection('product');
}

module.exports = Data; 
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Shoe-Com");

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    catagory: String

})

const saveInDb = async () => {
    let productModal =  mongoose.model('product', productSchema)
    let data = new productModal({name : "M5" , brand: "MAXX", price: 4333, catagory: "Mobile"})
    let result = await data.save();
    console.log(result);

}

const updateInDB = async () => {
    const productModal = mongoose.model('product', productSchema);
    let data = await productModal.updateOne(
        {name: "M5"},
        {
            $set:{name: "max pro M2"}
        }
    )
    console.log(data);

    
}

const DeleteInDB = async () => {
    const dataModel = mongoose.model('product', productSchema);
    let data = await dataModel.deleteMany({
        name: "M5"
    })

    console.log(data);
}

const FindInDB = async () => {
    const dataModel = mongoose.model('product', productSchema);
    let data = await dataModel.find()

    console.log(data);
}

FindInDB()
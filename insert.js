const Data = require('./mongodb3');

const insertFunc = async () => {
    const data = await Data();
    const result  = await data.insertMany([
        {
        name: 'xoami 13 pro',
        brand: 'xoami',
        price: 89000,
        catagory: 'mobile'
    },
    {
        name: "lava blazze",
        brand: "lava",
        price: 3400,
        catagory: "mobile"

    }
]);
    if(result.acknowledged) {
        console.log("inserted successfully");

    }
    

}
insertFunc()


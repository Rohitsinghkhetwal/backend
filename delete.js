const Data = require('./mongodb3');

const DeleteProduct = async () => {
    const data = await Data();
    const result = await data.deleteMany({name: "xoami 13 pro"});
    console.log(result);
    if(result.acknowledged) {
        console.log("Deletion successfully");
    }
    


}

DeleteProduct();
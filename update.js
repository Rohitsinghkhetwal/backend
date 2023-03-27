const updateData = require('./mongodb3');

const updatedFile = async () => {
    const data = await updateData();
    const result =  await data.updateOne(
        {name: "samsung s23 ultra"}, {
            $set:{name: "samsung s24 ultra", price: 32000}
        }
    )
    

}
updatedFile();
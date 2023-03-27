const Data = require('./mongodb3')
// Data().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     });
// })

const FethData = async () => {
    let data = await Data();
    data = await data.find().toArray();
    console.log(data);
}
FethData()
const fs = require('fs');
const path = require('path');
const Dirpath = path.join(__dirname, 'crud');
const filePath = `${Dirpath}/data.txt`;

// fs.writeFileSync(filePath,"This is my first Node app")
// reading the file

// fs.readFile(filePath,'utf8' ,(err, files) => {
//     console.log(files);
// });

// update the file
// fs.appendFile(filePath, ' its very intresting and curius', (err) => {
//     if(!err){
//         console.log("File is upadatad");
//     }
// })

// Rename the file
// fs.rename(filePath, `${Dirpath}/demoData.txt`, (err) => {
//     if(!err) {
//         console.log("file name is updated");
//     }
// })

// Deleting the file 
fs.unlinkSync( `${Dirpath}/demoData.txt`);
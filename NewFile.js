const fs = require('fs');
const path = require('path');
const dirt = path.join(__dirname, 'crud');
const filepath = `${dirt}/hello.txt`;

// fs.writeFileSync(filepath, 'using node for backend development');
// fs.readFile(filepath,'utf-8',(err, files) => {
//     console.log(files);
// })

//append
// fs.appendFile(filepath,' Nodejs is osm languag for backend', (err) => {
//     if(!err) {
//         console.log("file is updated");
//     }
// })

// fs.rename(filepath, `${dirt}/Node.txt`, (err) => {
//     if(!err) {
//         console.log("file is renamed");
//     }
// } )

fs.unlinkSync(`${dirt}/Node.txt`)

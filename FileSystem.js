const fs = require('fs');
const Path = require('path');
const DirPath = Path.join(__dirname, 'files');
console.log(DirPath);
// for(i = 0; i<5; i++) {
//     fs.writeFileSync(  `Hello.${i}text`, "A simple txt file system node")
// }
fs.readdir(DirPath, (err, files) => {
    

})
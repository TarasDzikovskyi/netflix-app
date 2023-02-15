
// /mnt/NFS/\Cam3\2023\02\02\20230202231310940_BK070HT_LPRGalicia.jpg
let str = "\\Cam3\\2023\\02\\02\\20230202231310940_BK070HT_LPRGalicia.jpg"


let path = str.split('\\').join('/')

// let file = path.split('/')
// console.log(file[file.length-1])


const fs = require('fs');
const file = fs.createReadStream(path);
console.log(file)
// resp.setHeader('Content-Length', file.stat().size);
// file.pipe(resp);

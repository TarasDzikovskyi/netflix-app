const jsonObject = {
    "Name":'Ram',
    "Age":'28',
    "Dept":'IT'
}
const encodedJsonObject = Buffer.from(JSON.stringify(jsonObject)).toString('base64');
console.log(encodedJsonObject)

const object =  Object()
console.log(object)

const express = require('express');
const app = express();


app.use(express.json());


app.listen(5000, () => {
    console.log(`Server is running on port ${5000}!`);
})

// 192.168.145.238

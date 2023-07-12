const fs = require('fs');
let text = fs.readFileSync('text.txt', 'utf-8');
text = text.replace('hiii', 'Sohan');
console.log("the content of the file is")

console.log(text)
console.log("creating a newfile")
fs.writeFileSync('pratyush.txt', 'Sohan is a good boy');

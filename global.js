const path = require("path");

console.log(__dirname); // stating the current directory path
console.log(__filename); // stating the full path to the file

console.log(`The file name is ${path.basename(__filename)} 
and ${path.dirname("global.js")}`)

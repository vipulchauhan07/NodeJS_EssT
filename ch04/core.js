const path = require("path");
const util = require("util");
const v8 = require("v8");

util.log(v8.getHeapStatistics());

util.log(path.basename(__filename));
util.log(`^ The name of the current file is above.`)



const dirUploads = path.join(__dirname, "www", "files", "uploads");
const dirUploads1 = path.join(__dirname, "www/files/uploads");

console.log(`${dirUploads}

${dirUploads1}

`);
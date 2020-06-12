const readLine = require("readline")

// creating the interface for using readLine 
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like the node? ", answer => {
    console.log(`Your answer is ${answer}`);
});
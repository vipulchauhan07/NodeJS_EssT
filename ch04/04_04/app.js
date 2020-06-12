const counter = require("./myModule");
for (let index = 0; index < 5; index++) {
    counter.inc();
}

console.log(counter.getCount());
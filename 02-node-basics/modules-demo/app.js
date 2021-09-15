// Native / Core Modules
// - path, os, fs, events, utils, http etc

const os = require("os")

console.log("Total Memory : ", os.totalmem());
console.log("Free Memory : ", os.freemem());
console.log("Arch : ", os.arch());
console.log("Number os CPU's : ", os.cpus().length);




// const path = require("path")

// const URL = "http://www.example.com/public/index.html";

// console.log(path.dirname(URL))

// console.log(path.extname(URL))

// console.log(path.basename(URL))


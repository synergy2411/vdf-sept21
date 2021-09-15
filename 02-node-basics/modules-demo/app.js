// External Module/Packages/Dependecy
const chalk = require("chalk")

console.log(chalk.green("Success Message"))
console.log(chalk.red("Error Message"))


console.log("Process Arguments : ", process.argv)

const yargs = require("yargs")
console.log("Yargs Aruguments : ", yargs.parse())











// File Module
// const {getLuckyNumber, getDailyQuote} = require("./utils")

// console.log("Your lucky Number is : ", getLuckyNumber());

// console.log("Your daily quote : ", getDailyQuote())














// Native / Core Modules
// - path, os, fs, events, utils, http etc

// const fs = require("fs")

// fs.readFile("../async.js", (err, data) => {
//     if(err){
//         console.log(err)
//         process.exit(1)
//     }
//     console.log(data.toString());
// })

// console.log("Start writing")
// fs.writeFileSync("./test.txt", "This is sample text")
// console.log("End writing")






// const os = require("os")

// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());
// console.log("Arch : ", os.arch());
// console.log("Number os CPU's : ", os.cpus().length);




// const path = require("path")

// const URL = "http://www.example.com/public/index.html";

// console.log(path.dirname(URL))

// console.log(path.extname(URL))

// console.log(path.basename(URL))


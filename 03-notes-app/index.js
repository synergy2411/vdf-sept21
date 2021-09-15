const yargs = require("yargs");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "title to add new note"
        },
        body : {
            type : String,
            demandOption : true,
            description : "body to add new note"
        }
    },
    handler : (args) => {
        console.log("Handler Works!", args)
    }
})

yargs.parse();


// node index.js add --title="" --body=""
// node index.js read --title=""
// node index.js remove --title=""
// node index.js list
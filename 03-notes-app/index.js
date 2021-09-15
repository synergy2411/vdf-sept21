const yargs = require("yargs");

// ADD
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

// READ
yargs.command({
    command : "read",
    description : "to read one note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "title to read one note"
        }
    },
    handler : args => {
        console.log(args)
    }
})

// REMOVE

yargs.command({
    command : "remove",
    description : "to remove on note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "title to remove one note"
        }
    },
    handler : args => {
        console.log(args)
    }
})

// LIST

yargs.command({
    command : "list",
    description : "to list down all notes",
    handler : () => {
        console.log("Notes coming soon...")
    }
})

yargs.parse();


// node index.js add --title="" --body=""
// node index.js read --title=""
// node index.js remove --title=""
// node index.js list
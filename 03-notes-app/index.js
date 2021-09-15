const yargs = require("yargs");
const { addNote, readNote, listNote, removeNote } = require("./utils/notes");

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
        // console.log("Handler Works!", args)
        addNote(args.title, args.body)
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
        readNote(args.title)
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
        removeNote(args.title)
    }
})

// LIST

yargs.command({
    command : "list",
    description : "to list down all notes",
    handler : () => {
        listNote()
    }
})

yargs.parse();


// node index.js add --title="" --body=""
// node index.js read --title=""
// node index.js remove --title=""
// node index.js list
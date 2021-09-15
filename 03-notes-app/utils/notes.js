const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try{
    const notesBuffer = fs.readFileSync("./notes.json")
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString)
    }catch(err){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(chalk.green("Notes Saved"))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const foundNote = notes.find(note => note.title === title)
    if(foundNote){
        console.log(chalk.red("Note already exist. Try again!"))
    }else{
        notes.push({title, body, createdAt : new Date()})
        saveNotes(notes)
    }
}

// readNote

module.exports = {
    addNote
}
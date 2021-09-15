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
    notes.push({title, body})
    saveNotes(notes)
}

module.exports = {
    addNote
}
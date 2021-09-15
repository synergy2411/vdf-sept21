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

const saveNotes = (notes, flag) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    if(flag){
        console.log(chalk.green("Note added"))
    }else{
        console.log(chalk.green("Note removed"))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const foundNote = notes.find(note => note.title === title)
    if(foundNote){
        console.log(chalk.red("Note already exist. Try again!"))
    }else{
        notes.push({title, body, createdAt : new Date()})
        saveNotes(notes, true)
    }
}

const readNote = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);
    if(foundNote){
        console.log(chalk.blue("Note Found"))
        console.log(chalk.blue("------------------"))
        console.log(chalk.grey("Title : ", foundNote.title))
        console.log(chalk.grey("Body : ", foundNote.body))
    }else{
        console.log(chalk.red("Note does not exist. Try again!"))
    }
}

const listNote = () => {
    const notes = loadNotes();
    if(notes.length>0){
        console.log(chalk.blue("Notes List"))
        notes.forEach(note => {
            console.log(chalk.blue("-------------------"))
            console.log(chalk.grey("Title : ", note.title))
            console.log(chalk.grey("Body : ", note.body))
        })
    }else{
        console.log(chalk.blue("No Notes available. Be the first to create one."))
    }

}

const removeNote = title => {
    const notes = loadNotes();
    const position = notes.findIndex(note => note.title === title)
    if(position >= 0){
        const duplicateNotes= notes.filter(note => note.title !== title)
        saveNotes(duplicateNotes, false);
    }else{
        console.log(chalk.red("Note does not exist"))
    }
}

module.exports = {
    addNote, readNote, listNote, removeNote
}
const fs = require('fs');
const { totalmem } = require('os');
const chalk = require('chalk');

const getNotes = function () {
    return 'Suas Notas...'
};

//Adding Notes 
const addNote = (title, body) => {
    const notes = loadNotes()

    //Array Filter (Duplicate notes)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log('Nova Nota Adicionada')
    }else{
        console.log('Titulo ja Utilizado')
    };
};

// Removing Notes 
const removeNote = (title) => {
    const notes = loadNotes()
    //Array Filter
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    });

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Nota Removida'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Nota Não Encontrada'))
    }
};

//Listing Notes 
const listNotes = () => {
    const notes = loadNotes();

    console.log('Suas Notas:')

    notes.forEach((note) => {
        console.log(note.title)
    });
};

//Read Notes 
const readNote = (title) => {
    const notes = loadNotes();
    //Here we'll store the match
    const note = notes.find((note) => note.title === title)

    //Logic
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
};

//Loading our functions 
const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
    saveNotes(notes)
};

// Saving Notes 
const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

///Exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
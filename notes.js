const fs = require('fs');
const { totalmem } = require('os');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your Notes...'
};

//Adding Notes 
const addNote = (title, body) => {
    const notes = loadNotes()
    //Array Filter (Duplicate notes)
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log('New Note Added')
    }else{
        console.log('Note Title Taken')
    }
};

// Removing Notes 
const removeNote = (title) => {
    const notes = loadNotes()
    //Array Filter
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    });

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
};

//Listing Notes 
const listNotes = () => {
    const notes = loadNotes();

    console.log('Your Notes:')

    notes.forEach((note) => {
        console.log(note.title)
    });
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
    listNotes: listNotes
};
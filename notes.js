const fs = require('fs');
const { totalmem } = require('os');

const getNotes = function () {
    return 'Your Notes...'
};

//Adding Notes 
const addNote = function (title, body) {
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

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
};
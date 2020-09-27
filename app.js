const chalk = require('chalk');
// Yargs do the parsing arguments
const yargs = require('yargs');
const getNotes = require('./notes.js');


// Create Add Command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note')
    }
})

// Create Remove Command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing Note')
    }
})

// Create list Command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function() {
        console.log('Reading a Note')
    }
})

// add, remove, read, list 

console.log(yargs.argv);

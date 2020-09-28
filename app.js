const chalk = require('chalk');
const { argv } = require('process');
// Yargs do the parsing arguments
const yargs = require('yargs');
const notes = require('./notes.js');


// Create Add Command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
});

// Create Remove Command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv){
        console.log('Removing Note', argv)
    }
});

// Create list Command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes')
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function() {
        console.log('Reading a Note')
    }
});


// Parsing
yargs.parse()


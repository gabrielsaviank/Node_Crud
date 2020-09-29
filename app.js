// Some Libraries and others
const chalk = require('chalk');
const { argv } = require('process');
// Yargs do the parsing arguments
const yargs = require('yargs');
const notes = require('./notes.js');



// Create Add Command 
yargs.command({
    command: 'add',
    describe: 'Adicionar Nova Nota',
    builder: {
        title: {
            describe: 'Titulo da Nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Corpo da Nota',
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
    describe: 'Remover Nota',
    builder: {
        title: {
            describe: 'Titulo da Nota',
            demandOption: true,
            type: 'string'
        }, 
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
});

// Create list Command
yargs.command({
    command: 'list',
    describe: 'Listar Notas',
    handler: function(){
        notes.listNotes()
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Ler Notas',
    builder: {
        title: {
            describe: 'Titulo da Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
});


// Parsing
yargs.parse()


// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Kobe');
// fs.appendFileSync('notes.txt', '\nPogi Kobe');
// const sum = require('./utils');

// console.log(sum(2, 23));

const getNotes = require('./notes');
const msg = getNotes();
console.log(msg);

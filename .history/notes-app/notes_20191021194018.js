const fs = require('fs');
const getNotes = function() {
  return 'Your notes...';
};

const addNote = function(title, body) {};

const loadNotes = function() {
  const dataBuffer = fs.readFileSync('notes.json');
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};

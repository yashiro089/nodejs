const fs = require('fs');
const getNotes = function() {
  return 'Your notes...';
};

const addNote = function(title, body) {
  const notes = loadNotes();
  console.log(notes);
  notes.push({
    title: title,
    body: body
  });

  saveNotes(notesF);
};

const saveNotes = function(notes) {};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};

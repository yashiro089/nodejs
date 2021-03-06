const fs = require('fs');

const deleteNote = function(title) {
  const notes = loadNotes();

  const noteToKeep = notes.filter(function(note) {
    return note.filter !== title;
  });

  console.log(notesToKeep);

  if (notesToKeep.length !== 0) {
    fsSaveNote(notesToKeep);
    console.log('Note has been deleted');
  } else {
    console.log('Note does not exist');
  }
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};

const fsSaveNote = function(note) {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync(dataJSON);
};

module.exports = {
  deleteNote: deleteNote
};

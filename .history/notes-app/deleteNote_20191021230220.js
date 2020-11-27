const fs = require('fs');

const deleteNote = function(title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.filter !== title;
  });

  console.log(notesToKeep);

  if (notesToKeep.length !== 0) {
    fsDeleteNote(notesToKeep);
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

const fsDeleteNote = function(note) {
  const dataJSON = JSON.stringify(note);
  fs.unlinkSync(dataJSON);
};

module.exports = {
  deleteNote: deleteNote
};

const fs = require("fs");
const path = require("path");

// create note function
function createNewNote(body, notesArray) {
    const note = body;
    // push note to json array
    notesArray.push(note);
    // write to db file
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return created note
    return note;
}

function deleteNote(searchedId, notesArray) {
    // if id is in json continue else return false
    if (notesArray.some(note => note.id === searchedId)) {
        // get index of object with id searched
        const noteIndex = notesArray.findIndex(note => note.id === searchedId);
        notesArray.splice(noteIndex, 1);
        // write to db file
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({ notes: notesArray }, null, 2)
        );

        return true;
    } else {
        return false;
    }


}

module.exports = { createNewNote, deleteNote };

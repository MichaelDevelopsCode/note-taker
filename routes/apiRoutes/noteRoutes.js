// unique id with uuid
const { v4: uuidv4 } = require('uuid');
// import db json
const { notes } = require('../../db/db.json'); 
// import functions
const { createNewNote, deleteNote } = require('../../lib/notes');

const router = require('express').Router();

// get to read db.json and return it
router.get('/notes', (req,res) => {
    // return db json
    return res.json(notes);
});

// post to db.json
router.post('/notes', (req,res) => {
    // generate id
    const uniqueId = uuidv4();
    // assign id to note
    req.body.id = uniqueId;
    // create note and return it
    const note = createNewNote(req.body, notes);
    return res.json(note);
});

// delete from db 
router.delete('/notes/:id', (req,res) => {
    // var for id searched
    const searchedId = req.params.id;
    // get index of object with id searched
    const response = deleteNote(searchedId, notes);

    // see if id is in notes then delete else send error
    if (response) {
        return res.status(200).send(`Note with ID: ${searchedId} deleted from database`)
    } else {
        return res.status(400).send("Enter a valid note id to delete");
    }
});

module.exports = router;
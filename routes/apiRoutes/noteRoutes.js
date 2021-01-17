// unique id with uuid
const { v4: uuidv4 } = require('uuid');
// import db json
const { notes } = require('../../db/db.json'); 
// import functions
const { createNewNote } = require('../../lib/notes');

const router = require('express').Router();

// get to read db.json and return it
router.get('/notes', (req,res) => {
    // return db json
    return res.json(notes);
});

router.post('/notes', (req,res) => {
    // generate id
    const uniqueId = uuidv4();
    // assign id to note
    req.body.id = uniqueId;
    // create note and return it
    const note = createNewNote(req.body, notes);
    return res.json(note);
});

module.exports = router;
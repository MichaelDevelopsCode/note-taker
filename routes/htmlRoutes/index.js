const path = require('path');
const router = require('express').Router();

// redirect to main html
router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// redirect to notes html page
router.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;
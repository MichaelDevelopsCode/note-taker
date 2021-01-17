const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;
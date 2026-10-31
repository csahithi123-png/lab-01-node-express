// Route definitions for the Express server.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).type('text').send('Welcome to the Node.js and Express server!');
});

router.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Ch. Sahithi',
    registrationNumber: '252U1R1062',
    section: 'CSE-1A'
  });
});

router.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).type('text').send(`Current date and time: ${now}`);
});

module.exports = router;

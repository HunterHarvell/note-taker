const htmlRouter = require('express').Router();
const path = require('path');

// Route for the landing page
htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for the notes page
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// 
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = htmlRouter;
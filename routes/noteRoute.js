const noteRouter = require('express').Router();
const data = require('../data/db.json');
const { addNote, deleteNote } = require('../lib/data.js');

noteRouter.get('/notes', (req, res) => {
    res.send(data);
});
noteRouter.get('/', (req, res) => {
    res.send('API HERE!');
});
noteRouter.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});
noteRouter.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = noteRouter;
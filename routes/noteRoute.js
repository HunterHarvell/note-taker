// bringing in dependencies
const noteRouter = require('express').Router();
const { nanoid } = require('nanoid');
const fs = require('fs');
const data = require('../data/db.json');
const { addNote, deleteNote } = require('../lib/data.js');

// helper functions
const notes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, 'utf8', (err, data) => {
            if (err) {
                reject(jsonData);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function addNote(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true);
            }
        });
    })
}

// get route
noteRouter.get('/notes', (req, res) => {
    notes()
        .then(notes => res.json(notes))
        .catch((eer) => res.status(500).json({
            error: err
        }));
});

// post route
noteRouter.post('/notes', (req, res) => {
    req.body['id'] = nanoid();
    notes()
        .then(notes => [...notes, req.body])
        .then(addedNote => addNote(addedNote))
        .then(isSuccess => res.json({success: isSuccess}))
        .catch((err) => res.status(500).json({
            error: err
        }));
});

// delete route
noteRouter.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = noteRouter;
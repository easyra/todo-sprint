const express = require('express');
const router = express.Router();
const notesDb = require('./noteDbModel.js');

router.get('/all', (req, res) => {
  notesDb
    .get()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  notesDb
    .getById(id)
    .then(note => {
      res.status(200).json(note);
    })
    .catch(err => {
      releaseEvents.json(err);
    });
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  notesDb
    .add({ title, content })
    .then(notes => {
      res.status(201).json(notes);
    })
    .catch(err => {
      res.json(err);
    });
});

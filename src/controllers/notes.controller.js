const express = require('express');
const { findNote, addNote, removeNote, findAllNotes } = require('../models/notes.models');

const notesRouter = express.Router();

notesRouter.get('/notes', async (req, res) => {
    const allNotes = await findAllNotes();
    return res.status(200).json(allNotes);
});

notesRouter.get('/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    const note = await findNote(noteId);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    return res.status(200).json(note);
});

notesRouter.post('/notes', async (req, res) => {
    const noteBody = req.body;
    await addNote(noteBody);
    return res.status(201).json({ msg: 'Note added successfully' })
});

notesRouter.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    const note = await removeNote(noteId);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' })
    }
    return res.status(200).json({ msg: 'Note deleted successfully' })

})

module.exports = notesRouter;
const express = require('express');
const notesRouter = require('./controllers/notes.controller');

const app = express();

app.use(express.json());
app.use(notesRouter)

module.exports = app;
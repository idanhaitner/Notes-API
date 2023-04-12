const notesModel = require('./notes.mongo');


async function findAllNotes() {
    return await notesModel.find({}, { _id: 0, __v: 0 })
}
async function findNote(noteId) {
    const note = await notesModel.findById(noteId, { _id: 0, __v: 0 });
    return note;

}

async function addNote(note) {
    try {
        await notesModel.create({ title: note.title, content: note.content });
        console.log('Successfully added note');
    } catch (err) {
        console.error(err);
    }
}

async function removeNote(noteId) {
    await notesModel.findByIdAndRemove(noteId);
}

module.exports = { findNote, addNote, removeNote, findAllNotes }
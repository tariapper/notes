const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    text: {
        type: String,
    },
    date: {
        type: Date,
    },
});

module.exports = mongoose.model("Note", NoteSchema, "notes");
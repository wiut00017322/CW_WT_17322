const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  word: {
    type: String,
    required: [true, 'Word'],
    minlength: [3, 'At least 3 characters'],
  },
  translation: {
    type: String,
    required: [true, 'Translation'],
    minlength: [3, 'At least 3 characters'],
  },
  topic: {
    type: String,
    required: [true, 'Topic'],
  },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);

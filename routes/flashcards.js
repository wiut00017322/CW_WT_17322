const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard');

// Here we get answer
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find().sort({ word: 1 });
    res.json(flashcards); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
});

// Get one flash card by ID for update
router.get('/:id', async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard is not found' });
    }
    res.json(flashcard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
});

// CREATE
router.post('/', async (req, res) => {
  const { word, translation, topic } = req.body;
  const flashcard = new Flashcard({ word, translation, topic });

  try {
    await flashcard.save();
    res.status(201).json(flashcard); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flashcard); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.status(204).end(); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;




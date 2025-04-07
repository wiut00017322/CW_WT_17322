require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Atlas is connected'))
  .catch(err => console.error(err));

// Setting up the template engine and statics
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json()); // JSON and AJAX

// Routes for working with flash cards
const flashcardRoutes = require('./routes/flashcards');
app.use('/api/flashcards', flashcardRoutes); // Routes API for CRUD operations

// Main route
app.get('/', (req, res) => {
  res.render('index');
});

// Handling errors for non-existent pages
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page is not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server works on http://localhost:${PORT}`);
});

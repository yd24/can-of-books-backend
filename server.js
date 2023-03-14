'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book.js');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received');

})

app.get('/books', getBooks);
app.post('/books', addBook);

async function addBook(req, res, next) {
  try {
    console.log(req);
    let newBook = await Book.create(req.body);
    res.status(200).send(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not create Book');
  }
}

async function getBooks(req, res, next) {
  try {
    let result = await Book.find();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send('Could not find requested book');
  }
}

app.get('*', (request, response) => {
  response.send('No resource found.');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

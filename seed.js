'use-strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

    await Book.create({
        name: 'Harry Potter',
        description: 'Harry gets his skull split by a dark wizard and then leads a life of poverty.',
        status: false,
        image_url: 'https://picsum.photos/300/250'
    });
    
    await Book.create({
        name: 'Harry Potter 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: false,
        image_url: 'https://picsum.photos/300/250'
    });

    await Book.create({
        name: 'Harry Potter 3',
        description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        status: false,
        image_url: 'https://picsum.photos/300/250'
    });
}

seed();
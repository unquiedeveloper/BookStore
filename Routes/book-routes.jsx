
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route for getting all books
router.get('/', bookController.getAllBooks);

// Route for getting a single book by ID
router.get('/:id', bookController.getBookById);

// Route for creating a new book
router.post('/', bookController.createBook);

// Route for updating a book by ID
router.put('/:id', bookController.updateBookById);

// Route for deleting a book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;

// controllers/bookController.js
const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'An error occurred while fetching books' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching book' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, description } = req.body;
    const book = new Book({ title, author, genre, publicationDate, description });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'An error occurred while creating book' });
  }
};

exports.updateBookById = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, description } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
      title,
      author,
      genre,
      publicationDate,
      description,
    }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating book by ID:', error);
    res.status(500).json({ error: 'An error occurred while updating book' });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(deletedBook);
  } catch (error) {
    console.error('Error deleting book by ID:', error);
    res.status(500).json({ error: 'An error occurred while deleting book' });
  }
};

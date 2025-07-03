import express from 'express';
import {
    getAllBooks, getBookById, addBook, updateBook, deleteBook
} from '../controllers/bookController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
//get all books
router.get('/', protect, getAllBooks);

// get book by id
router.get('/:id', protect, getBookById);

// add book
router.post('/', protect, addBook);

// update book details
router.put('/:id', protect, updateBook);

//Delete book
router.delete('/:id', protect, deleteBook);

export default router;

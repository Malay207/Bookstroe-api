import { getBooks, saveBooks, createBook } from '../models/bookModel.js';

export const getAllBooks = async (req, res) => {
    const books = await getBooks();
    res.json(books);
};

export const getBookById = async (req, res) => {
    const books = await getBooks();
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
};

export const addBook = async (req, res) => {
    const book = await createBook(req.body, req.user.id);
    res.status(201).json(book);
};

export const updateBook = async (req, res) => {
    const books = await getBooks();
    const idx = books.findIndex(b => b.id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: 'Not found' });
    if (books[idx].userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    books[idx] = { ...books[idx], ...req.body };
    await saveBooks(books);
    res.json(books[idx]);
};

export const deleteBook = async (req, res) => {
    const books = await getBooks();
    const idx = books.findIndex(b => b.id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: 'Not found' });
    if (books[idx].userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    const deleted = books.splice(idx, 1);
    await saveBooks(books);
    res.json(deleted[0]);
};

import { readFile, writeFile } from '../utils/fileHandler.js';
import { v4 as uuid } from 'uuid';

const bookPath = './data/books.json';

export const getBooks = async () => await readFile(bookPath);
export const saveBooks = async books => await writeFile(bookPath, books);

export const createBook = async (book, userId) => {
    const books = await getBooks();
    const newBook = { ...book, id: uuid(), userId };
    books.push(newBook);
    await saveBooks(books);
    return newBook;
};

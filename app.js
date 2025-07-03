import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/books', bookRoutes);

//error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

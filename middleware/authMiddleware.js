import jwt from 'jsonwebtoken';
import { getUsers } from '../models/userModel.js';

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const users = await getUsers();
        req.user = users.find(u => u.id === decoded.id);
        if (!req.user) throw new Error('User not found');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid Token' });
    }
};

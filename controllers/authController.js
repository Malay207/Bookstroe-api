import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createUser, findUserByEmail } from '../models/userModel.js';

const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await createUser(email, password);
        res.status(201).json({ id: user.id, email: user.email });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user.id);
        res.json({ token });
    } catch (err) {
        next(err);
    }
};

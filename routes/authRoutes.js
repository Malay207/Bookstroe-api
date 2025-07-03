import express from 'express';
import { register, login } from '../controllers/authController.js';
const router = express.Router();
//user register route
router.post('/register', register);

//user login route
router.post('/login', login);

export default router;

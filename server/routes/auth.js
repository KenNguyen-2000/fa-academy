import express from 'express';
import jwt from 'jsonwebtoken';
import { login, register } from '../controllers/auth.js';

const auth = express.Router();

auth.post('/login', login);
auth.post('/register', register);

auth.get('/forgot-password', (req, res) => {
  jwt.res.redirect('http://localhost:3000/reset-code');
});

export default auth;

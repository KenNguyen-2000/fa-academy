import express from 'express';
import {
  changeRole,
  changeStatus,
  deleteUser,
} from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/status/:id', changeStatus);
userRoutes.post('/role/:id', changeRole);
userRoutes.delete('/:id', deleteUser);
userRoutes.all('*', (req, res) => {
  res.status(400).json({ message: 'Not supported URL' });
});

export default userRoutes;

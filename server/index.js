import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import mongoose from 'mongoose';
import isAuth from './middlewares/authMiddleware.js';
import trimmer from './middlewares/trimmerMiddleware.js';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

const DB_URL = process.env.MONGO_ACCESS;

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '30mb' }));
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

//route
app.get('/', isAuth, (req, res) => {
  res.send('Hello World');
});

//Mongoose

mongoose.set('strictQuery', false);
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo DB connected!');
    app.listen(PORT, () => {
      console.log(`Server is listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

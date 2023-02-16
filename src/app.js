import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Companie from './routes/Companie.js'
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());
app.use(Companie);
app.set('port', process.env.PORT || 4000);

export default app;

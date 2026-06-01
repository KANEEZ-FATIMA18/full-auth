import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {authrouter} from './Routes/authRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
    origin:[process.env.FRONTEND_URL, process.env.HOSTED_FRONTEND_URL],
    credentials: true,
}))




// app.use(cors());

app.use(express.json());

app.use(cookieParser());

// app.use('/api/v1', router);
app.use('/api/v1', authrouter);



export default app;
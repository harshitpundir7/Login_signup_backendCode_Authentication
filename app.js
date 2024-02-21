import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/connectdb.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE;

app.use(cors());
connectDB(DATABASE_URL);
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
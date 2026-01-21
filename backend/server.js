import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

//config dotenv     

dotenv.config();
//mongodb Coneection
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173" , credentials: true }));
//Middleware
app.use(morgan('dev'));
app.use(express.json());
//Routes
import userRoutes from './routes/userRoutes.js';
app.use('/api/v1/users', userRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{console.log(`Server is running on port ${PORT}`.bgBlue)});
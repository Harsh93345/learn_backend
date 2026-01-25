import express from 'express';  
import cors from 'cors';
import cookieParser from 'cookie-parser';
//use of cookieparser middleware to parse cookies from incoming requests
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));//configuration to accept json data in request body
app.use(express.urlencoded({ extended: true, limit: '16kb' }));//configuration to accept urlencoded data in request body
app.use(express.static('public'))// to serve static files from 'public' directory
app.use(cookieParser());//middleware to parse cookies

export { app };

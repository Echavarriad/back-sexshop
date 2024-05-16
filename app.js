import dotenv from 'dotenv';
import express from 'express';
import { pool } from './src/Config/DB.js';
import UserRoute from './src/Routes/v1/users.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT || 4001;

app.use(UserRoute);
app.listen(PORT, () => {
    console.log('Api listen to port', PORT);
});



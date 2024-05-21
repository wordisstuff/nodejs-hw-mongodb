import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT);
console.log(PORT);

export const setupServer = () => {
    app.use(cors());
    app.use(pino({
        transport: {
            target: 'pino-pretty'
        }
    }));
    app.use('*', (req, res, next) => {
        res.status(404).json({
            message: 'Not found'
        });
    });


    app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
    });
};

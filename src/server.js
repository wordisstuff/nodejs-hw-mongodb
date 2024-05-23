import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddelware } from './middlewares/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';




export const setupServer = () => {


    const app = express();

    app.use(pino({
        transport: {
            target: 'pino-pretty'
        }
    }));
    app.use(cors());

    app.get('/', (req,res) => {
        res.send('HELLO');
    });

    app.use(notFoundMiddelware);
    app.use(errorHandlerMiddleware);

    const PORT = env(ENV_VARS.PORT,3000);

    // console.log(PORT);

    app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
    });
};

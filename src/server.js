import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';




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
    // app.get('*',)
    // app.use('*', notFoundMiddelware);

    const PORT = env(ENV_VARS.PORT,3000);

    console.log(typeof PORT);

    app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
    });
};

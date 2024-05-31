import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddelware } from './middlewares/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { getAllContacts, getContactById } from './services/contacts.js';
import { validateObjectId } from './middlewares/validateObjectId.js';




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

    app.get('/contacts', async (req, res, next) => {

        const contacts = await getAllContacts();

        res.json({
            status: 200,
            message:"Successfully found contacts!",
            data:contacts
        });
    });
    app.get('/contacts/:contactId', validateObjectId, async (req, res) => {

        const { contactId} = req.params;
        const contact = await getContactById(contactId);

    if (!contact) {
        return res.status(404).json({
        status: 404,
        message: `Contact ${contactId} not found!`,
        });
    }

        res.json({
            status: 200,
            message:`Successfully found contact with id ${contactId}!`,
            data:contact
        });
    });

    app.use(notFoundMiddelware);
    app.use(errorHandlerMiddleware);

    const PORT = env(ENV_VARS.PORT,3000);

    app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
    });
};

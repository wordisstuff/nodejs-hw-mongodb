import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddelware } from './middlewares/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { getAllContacts, getContactById } from './services/contacts.js';




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
    app.get('/contacts/:contactId', async (req, res) => {

        const { contactId } = req.params;

        if(!contactId) {
            return res.status(400).json({
                status: 400,
                message:"Contact id is required!"
            });
        }
        if (!contactId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(404).json({
                status: 404,
                message: `Contact ${contactId} not found!`
            });};

        const contact = await getContactById(contactId);

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

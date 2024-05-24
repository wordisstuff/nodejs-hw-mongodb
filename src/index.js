// src/index.js

// import { Contact } from "./db/contact.js";
import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";

const message = 'Hello world';

console.log(message);

const bootstrap = async () => {
    await initMongoConnection();
    // const contacts = await Contact.find({});
    // console.log(contacts);
    // console.log("object");
setupServer();
};


bootstrap();


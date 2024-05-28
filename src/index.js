// src/index.js

// import { Contact } from "./db/contact.js";
import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";

const bootstrap = async () => {
    await initMongoConnection();
setupServer();
};

bootstrap();


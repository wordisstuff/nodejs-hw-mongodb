import mongoose from "mongoose";
import { env } from '../utils/env.js';

import { ENV_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
    try {
        const { MONG_USER, MONG_PASS, MONG_URL, MONG_DB } = ENV_VARS;

        console.log("Hello i am MONGO");

        const user = env(MONG_USER);
        const pwd = env(MONG_PASS);
        const url = env(MONG_URL);
        const db = env(MONG_DB);

        // await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/?retryWrites=true&w=majority&appName=Cluster0`);
await mongoose.connect('mongodb+srv://wordisstuff:Or9HjLW4QKMsGb5H@cluster0.gwucv3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        // console.log(user, pwd, url,  db);
    }
    catch (e) {
        console.log("ERROR", e);
    }
};



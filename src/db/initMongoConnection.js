import mongoose from "mongoose";
import { dbAuth } from "../constants/index.js";


export const initMongoConnection = async () => {
    try {
        const { user, pwd, url, db } = dbAuth;

        await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
    }
    catch (e) {
        console.log("ERROR", e);
    }
};



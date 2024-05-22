import dotenv from 'dotenv';

dotenv.config();


export const env = (envName, defaultEnvName) => {

    if (process.env[envName]) return process.env[envName];
    if (defaultEnvName) return defaultEnvName;
    throw new Error(`Env ${envName} not found`);
};

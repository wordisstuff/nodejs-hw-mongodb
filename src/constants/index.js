import { env } from "../utils/env.js";

export const  ENV_VARS = {
    PORT: "PORT",
    MONG_USER: "MONGODB_USER",
    MONG_PASS: "MONGODB_PASSWORD",
    MONG_URL:"MONGODB_URL",
    MONG_DB:"MONGODB_DB"
};

export const dbAuth = {
    user: env(ENV_VARS.MONG_USER),
    pwd: env(ENV_VARS.MONG_PASS),
    url: env(ENV_VARS.MONG_URL),
    db: env(ENV_VARS.MONG_DB)
};

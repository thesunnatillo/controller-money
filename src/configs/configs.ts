import * as dotenv from "dotenv";
dotenv.config();

export class Config {

    static botToken: string = process.env.BOT_TOKEN as string;
    static adminId: string = process.env.ADMIN_ID as string;

    static database = {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    };
    
}
import * as dotenv from "dotenv";
dotenv.config();

export class Config {

    static botToken: string = process.env.BOT_TOKEN as string;
    static adminId: string = process.env.ADMIN_ID as string;
}
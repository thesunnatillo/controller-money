import { Context } from "grammy";
import ErrorHandler from "../../utils/errors/errors";

export default async function helpCommand(ctx: Context): Promise<void> {

    try {

        await ctx.reply("Help")

    } catch (err) {

        await ErrorHandler("command", "helpCommand", err);

    }
    
}
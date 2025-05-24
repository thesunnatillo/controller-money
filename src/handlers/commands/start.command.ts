import ErrorHandler from "../../utils/errors/errors";

export default async function startCommand(ctx: any) {

    try {

        await ctx.reply("Hello bro")


    } catch (err) {

        await ErrorHandler("command", "startCommand", err)

    }

}
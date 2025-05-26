import { Context } from "grammy";
import ErrorHandler from "../../utils/errors/errors";
import { UsersEntity } from "../../database/entities/users.entity";

export default async function startCommand(ctx: Context): Promise<void> {

    try {

        const userTelegramId = ctx.from?.id;

        const user = await UsersEntity.findOne({
            where: {
                telegramId: userTelegramId,
            }
        });

        if (!user) {

            await UsersEntity.save({
                telegramId: userTelegramId,
                name: ctx.from?.first_name,
                username: ctx.from?.username
            })

        }

        await ctx.reply("Hello bro")


    } catch (err) {

        await ErrorHandler("command", "startCommand", err)

    }

}
import { Context } from "grammy";
import ErrorHandler from "../../utils/errors/errors";
import { UsersEntity } from "../../database/entities/users.entity";
import { WalletsEntity } from "../../database/entities/wallets.entity";
import walletsButtons from "../../keyboards/inline/wallets.inline";

export default async function startCommand(ctx: Context): Promise<void> {

    try {

        const userTelegramId = ctx.from?.id;

        const user = await UsersEntity.findOne({
            where: {
                telegramId: userTelegramId?.toString(),
            }
        });

        if (!user) {

            await UsersEntity.save({
                telegramId: userTelegramId?.toString(),
                name: ctx.from?.first_name,
                username: ctx.from?.username
            });

        }

        const wallets = await WalletsEntity.find({
            where: {
                user: {
                    telegramId: userTelegramId?.toString(),
                },
            },
        });

        if (wallets) {



        }

        await ctx.reply("Assalomu Alaykum", { reply_markup: await walletsButtons(ctx) });


    } catch (err) {

        await ErrorHandler("command", "startCommand", err)

    }

}
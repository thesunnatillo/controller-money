import { Context, InlineKeyboard } from "grammy";
import ErrorHandler from "../../utils/errors/errors";
import { WalletsEntity } from "../../database/entities/wallets.entity";

export default async function walletsButtons(ctx: Context) {
    
    try {

        const wallets = await WalletsEntity.find({
            where: { user: { telegramId: ctx.from?.id.toString() } },
        });

        const keyboard = new InlineKeyboard();

        if (!wallets.length) {

            keyboard.text("Hech qanday wallet yo'q", "no_wallet");

        } else {

            wallets.forEach((wallet) => {
                keyboard.text(wallet.name, `wallet_${wallet.id}`).row();
            });

        }

        return keyboard;

    } catch (err) {

        await ErrorHandler("Button/Inline", walletsButtons.name, err);
        await ctx.reply("Walletlarni olishda xatolik yuz berdi.");

    }
}

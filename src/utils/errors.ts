import { Config } from "../configs/configs";
import { bot } from "../bot"

export default async function ErrorHandler(handlerName: string, functionName: string, error: any) {

    try {

        const errorMessage = `🪖 Handler: ${handlerName}\n⚙️ Function: ${functionName}\n\n\n‼️ ${error}\n\n📅 Date: ${Date()}`
        await bot.api.sendMessage(Config.adminId, errorMessage)


    } catch {

        await bot.api.sendMessage(Config.adminId, "ErrorHandler'da xatolik!")

    }

}
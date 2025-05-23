import { Bot, GrammyError, HttpError } from "grammy";
import { Config } from "./configs/configs";
import dispatcher from "./dispatcher";

export const bot = new Bot(Config.botToken)

bot.use(dispatcher)

bot.start()
.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
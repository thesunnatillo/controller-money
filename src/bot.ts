import { Bot, GrammyError, HttpError, session } from "grammy";
import { Config } from "./configs/configs";
import dispatcher from "./dispatcher";
import { rateLimiter } from "./utils/security/ratelimiter/ratelimiter";
import { AppDataSource } from "./database/data.source";
import { MyContext } from "./utils/types/bot.type";
import initial from "./sessions";

export const bot = new Bot<MyContext>(Config.botToken)

bot.use(session({ initial }));
bot.use(rateLimiter);
bot.use(dispatcher);


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

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
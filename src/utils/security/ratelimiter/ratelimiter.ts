import Redis from "ioredis";
import { limit } from "@grammyjs/ratelimiter";
import { Config } from "../../../configs/configs";
import { Context } from "grammy";

const redis = new Redis({
    host: Config.redis.host,
    port: Config.redis.port
});

export const rateLimiter = limit({
    // Allow only 3 messages to be handled every 2 seconds.
    timeFrame: 2000,
    limit: 3,

    // "MEMORY_STORE" is the default value. If you do not want to use Redis, do not pass storageClient at all.
    storageClient: redis,

    // This is called when the limit is exceeded.
    onLimitExceeded: async (ctx: Context) => {
      await ctx.reply("Please refrain from sending too many requests!");
    },

    // Note that the key should be a number in string format such as "123456789".
    keyGenerator: (ctx: Context) => {
      return ctx.from?.id.toString();
    },
  })
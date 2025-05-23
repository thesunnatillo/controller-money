import { Composer } from "grammy";
import startCommand from "./handlers/commands/start.command";

const dispatcher = new Composer()

// C O M M A N D S
dispatcher.command('start', startCommand)

export default dispatcher;
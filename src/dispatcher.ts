import { Composer } from "grammy";
import startCommand from "./handlers/commands/start.command";
import helpCommand from "./handlers/commands/help.command";

const dispatcher = new Composer()

// C O M M A N D S
dispatcher.command('start', startCommand);
dispatcher.command('help', helpCommand);

export default dispatcher;
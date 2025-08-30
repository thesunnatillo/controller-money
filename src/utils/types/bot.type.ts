import { Context, SessionFlavor } from "grammy";
import { ISessionData } from "../interfaces/sessions.interface";

export type MyContext = Context & SessionFlavor<ISessionData>;
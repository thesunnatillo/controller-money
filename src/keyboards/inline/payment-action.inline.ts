import { InlineKeyboard } from "grammy";

export default function paymentActionButton() {

    return new InlineKeyboard().text("-", "expence").text("+", "income")

}
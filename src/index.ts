import { ClientOptions } from "discord.js";
import { Bot } from "./structures/Client";
import { config as configure } from "dotenv";

configure()

const baseOptions: ClientOptions = {
    allowedMentions: {
      parse: ["users"],
      repliedUser: true,
    },
    intents: 14335,
};

const client: Bot = new Bot(baseOptions);

client.login(process.env.BOT_TOKEN);

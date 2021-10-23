import { ClientOptions } from "discord.js";
import Client from "./structures/Client";
import { config as configure } from "dotenv";

configure();

const baseOptions: ClientOptions = {
    allowedMentions: {
      parse: ["users"],
      repliedUser: true,
    },
    intents: 14335,
};

const client: Client = new Client(baseOptions);

client.startSystem();

import { Message } from "discord.js";
import { Client, BaseCommand } from "../../../structures/";

export default class Ping extends BaseCommand {
    constructor() {
        super({
            name: "ping",
            aliases: ["pingo"],
            category: "utility",
            description: "",
        });
    }
    public async run (client: Client, message: Message) {
        message.channel.send(`Pong! Latency: \`${client.ws.ping}ms\``)
    }
}
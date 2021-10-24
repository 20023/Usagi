import { Message as message } from "discord.js";

import { Client, BaseEvent, BaseCommand } from "../structures/";

export default class Message extends BaseEvent {
    constructor() {
        super({
            name: "messageCreate"
        })
    }

    public async run(client: Client, message: message) {
        if (!message.guild) return;
        if (message.author.bot) return;
        
        const prefix = client.defaultPrefix;

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();

        const commandFile: BaseCommand = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

        if (commandFile) {
            return commandFile.run(client, message, args);
        };
    }
}
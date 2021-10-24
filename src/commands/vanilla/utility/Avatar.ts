import { Message } from "discord.js";
import { Client, BaseCommand, EmbedBuilder } from "../../../structures/";

export default class Avatar extends BaseCommand {
    constructor() {
        super({
            name: "avatar",
            aliases: ["av"],
            category: "utility",
            description: "",
        });
    }
    public async run (client: Client, message: Message, args: string[]) {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() =>{}) || message.author

        const userFlags = await user.fetchFlags()
        .then(flags => Promise.resolve(Object.entries(flags.serialize()).filter(([_, val]) => !!val)))
        .then(flags => flags.map(([key, _]) => client.emojis.cache.find(x => x.name === key)?.toString() || key))
        .catch(() => []);
                
        const embed = new EmbedBuilder()
        .setTitle(`${userFlags.join(' ')} ${user.tag}`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
    
        message.channel.send({ embeds: [embed] })
    }
}
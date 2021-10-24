import { Message } from "discord.js";
import BaseCommandInfo from "../interfaces/BaseCommandInfo";
import Client from "./Client";

export default abstract class BaseCommand {
    name: string;
    usage: string;
    aliases: Array<string>;
    category: string;
    description: string;

    constructor(public BaseCommandInfo: BaseCommandInfo) {
        this.name = BaseCommandInfo.name;
        this.aliases = BaseCommandInfo.aliases;
        this.description = BaseCommandInfo.description;
        this.category = BaseCommandInfo.category;
    };

    //@ts-ignore
    abstract async run(client: Client, message: Message, args: Array<string>): Promise<any>;
}
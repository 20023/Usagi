import BaseCommand from "./BaseCommand";
import EventHandler from "../handlers/EventHandler";
import CommandHandler from "../handlers/CommandHandler";

import { Collection, Client, ClientOptions } from "discord.js";

import { Categories } from "../resolvables/CategoryResolvable";

import { red, green, magenta } from "chalk";
import { config as configure } from "dotenv";

export default class Bot extends Client {
  public defaultPrefix: string;

  public aliases: Collection<string, string>;
  public commands: Collection<string, BaseCommand>;
  
  constructor(options: ClientOptions) {
    super(options);
    this.aliases = new Collection();
    this.commands = new Collection();
    this.defaultPrefix = process.env.DEFAULT_PREFIX;
  }
  private getToken(): string | undefined {
    return process.env.PRODUCTION ? process.env.BOT_TOKEN : process.env.TEST_TOKEN;
  }
  public console (error: any, message: string, label: string) {
    const isError =  error ? red('ERROR') : green('Success')
    console.log(`[${isError}] [${magenta(label)}] ${message}`)
  }
  public startSystem(): void {
    configure();
    this.login(this.getToken());

    EventHandler.load("../events", this);
    CommandHandler.load("../commands/vanilla", Categories, this); // Execute both to initialize the commands and events
  }
}

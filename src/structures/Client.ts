import { Client, ClientOptions } from "discord.js";
import EventHandler from "../handlers/EventHandler";
import { config as configure } from "dotenv";
import { red, green, magenta } from "chalk";

export default class Bot extends Client {
  public defaultPrefix: string;
  
  constructor(options: ClientOptions) {
    super(options);

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
    EventHandler.load("../events", this);
    this.login(this.getToken());
  }
}

import { Client, ClientOptions } from "discord.js";
import EventHandler from "../handlers/EventHandler";
import { config as configure } from "dotenv";

export default class Bot extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }
  private getToken(): string | undefined {
    return process.env.PRODUCTION ? process.env.BOT_TOKEN : process.env.TEST_TOKEN;
  }
  public startSystem(): void {
    configure();
    EventHandler.load("../events", this);
    this.login(this.getToken());
  }
}

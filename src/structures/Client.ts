import { Client, ClientOptions } from "discord.js";

export class Bot extends Client {

  constructor(options: ClientOptions) {
    super(options);
  }

  async login(token?: string) {
    return await super.login(token);
  }
}
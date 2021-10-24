import { MessageEmbed, User } from 'discord.js';

export default class EmbedBuilder extends MessageEmbed {
  public constructor(user?: User, data = {}) {
    super(data);

    this.setColor('#DC143C')

    if (user) this.setAuthor(user.username, user.displayAvatarURL({ dynamic: true }));
  }
}
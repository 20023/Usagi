import Client from "../structures/Client";
import BaseEvent from "../structures/BaseEvent";

export default class Ready extends BaseEvent {
    constructor() {
        super({
            name: "ready",
        })
    }
    public async run(client: Client) {
        client.console(false, `${client.user.tag} has logged into ${client.guilds.cache.size} servers.`, "Websocket");
    }
}


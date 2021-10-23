import { readdir } from "fs";

import Client from "../structures/Client";
import BaseEvent from "../structures/BaseEvent";

export default new class EventHandler {
    async load(path: string, client: Client) {
        readdir(`${__dirname}/${path}`, (err, files) => {
            if (err) throw err;
            for (let file of files) {
                const { default: Event } = require(`${__dirname}/${path}/${file}`)
                const event = <BaseEvent>new Event()
                client.on(event.name, event.run.bind(null, client));
            }
        })
    }
}

import { readdir } from "fs";

import Client from "../structures/Client";
import BaseEvent from "../structures/BaseEvent";

export default new class EventHandler {
    async load(path: string, client: Client) {
        readdir(`${__dirname}/${path}`, async (err, files) => {
            if (err) throw err;
            for (const file of files) {
                const { default: Event } = await import(`${__dirname}/${path}/${file}`)
                const event = <BaseEvent>new Event()
                client.on(event.name, event.run.bind(null, client));
            }
        })
    }
}

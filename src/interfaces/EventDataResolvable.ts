import { ClientEvents } from "discord.js";

export default interface IEventDataResolvable {

    /**
     * The name of the event.
     * Any event that can be passed into client.on() is valid
     */
    name: keyof ClientEvents
}

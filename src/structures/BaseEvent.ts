import { ClientEvents } from 'discord.js';
import Client from "./Client";
import IEventDataResolvable from '../interfaces/EventDataResolvable';

export default abstract class BaseEvent {
    constructor(private eventData: IEventDataResolvable) { }

    public get name(): keyof ClientEvents { return this.eventData.name }

    public abstract run(client: Client, ...args: any): void
}

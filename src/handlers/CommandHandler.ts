import { readdir } from "fs";
import Client from "../structures/Client";
import BaseCommand from "../structures/BaseCommand";

export default new class CommandHandler {
    load(mainPath: string, subPaths: Array<string>, client: Client): void {
        for (const path of subPaths) {
            readdir(`${__dirname}/${mainPath}/${path}`, async (err, files) => { 
                if (err) throw err;
                for (let file of files) {
                    // Import the command.
                    const { default: Command } = await import(`${__dirname}/${mainPath}/${path}/${file}`)

                    const command: BaseCommand = new Command();

                    // Set the client to use that command.
                    client.commands.set(command.name.toLowerCase(), command);

                    if (command.aliases) {
                        command.aliases.forEach((alias: string) => client.aliases.set(alias, command.name.toLowerCase()));
                    }
                }
                client.console(false, `Successfully loaded ${files.length} command(s) in the ${path} category`, "CommandHandler");
            });
        } 
    }
}
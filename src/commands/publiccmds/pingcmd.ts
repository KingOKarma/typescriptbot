import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class pingcmd extends Command {
    public constructor() {
        super("ping", {
            aliases: ["pang", "ping", "pong"],
            category: "public commands",
            description: {
                content: "Check the latencey of the ping of to the Discord API",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3,
        });
    }

    public exec(message: Message): Promise<Message> {
        return message.util.send(`Pong! 🏓 \`${this.client.ws.ping}ms\``);
    }
}
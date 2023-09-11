import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import axios from 'axios';
import { Language } from '../../../models/enum-helpers/index.js';
import { EventData } from '../../../models/internal-models.js';
import { Lang } from '../../../services/index.js';
import { InteractionUtils } from '../../../utils/index.js';
import { Command, CommandDeferType } from '../../index.js';

export class CheckCommand implements Command {
    public names = [Lang.getRef('chatCommands.checkstatus', Language.Default)]; // Change the command name as needed
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        // Construct the request URL
        const url = 'https://api.mcsrvstat.us/2/play.pxlvrs.net';

        try {
            // Make the HTTP GET request
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'PixelVerse Helper, me@joshsevero.dev',
                },
            });

            const serverInfo = response.data;

            await InteractionUtils.send(
                intr,
                Lang.getEmbed('displayEmbeds.checkresponse', data.lang, {
                    IP: serverInfo.ip,
                    HOSTNAME: serverInfo.hostname || 'N/A',
                    PLAYERS: serverInfo.players
                        ? `${serverInfo.players.online}/${serverInfo.players.max}`
                        : 'N/A',
                    VERSION: serverInfo.version || 'N/A',
                    MOTD: serverInfo.motd ? serverInfo.motd.clean : 'N/A',
                    ONLINE: serverInfo.online || 'N/A',
                    PING: serverInfo.ping || 'N/A',
                    QUERY: serverInfo.query || 'N/A',
                })
            );
        } catch (error) {
            console.error(error);
            // Handle error if the request fails
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('errorEmbeds.command', data.lang, {
                    ERROR_CODE: error.code,
                })
            );
        }
    }
}

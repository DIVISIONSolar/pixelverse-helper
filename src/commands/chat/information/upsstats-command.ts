import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import axios from 'axios';
import { Language } from '../../../models/enum-helpers/index.js';
import { EventData } from '../../../models/internal-models.js';
import { Lang } from '../../../services/index.js';
import { InteractionUtils } from '../../../utils/index.js';
import { Command, CommandDeferType } from '../../index.js';

export class UpsStatusCommand implements Command {
    public names = [Lang.getRef('chatCommands.upsstatus', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            location: intr.options.getString(
                Lang.getRef('arguments.upslocation', Language.Default)
            ),
        };

        let url = '';

        // Determine the URL based on the location argument
        if (args.location.toLowerCase() === 'pxlvrs.net') {
            url = 'https://na-pa-01.joshseveros.cloud/cgi-bin/apcupsd/upsfstats.cgi?host=127.0.0.1';
        } else if (args.location.toLowerCase() === 'network') {
            url = 'https://na-pa-04.joshseveros.cloud/cgi-bin/apcupsd/upsfstats.cgi?host=127.0.0.1';
        } else {
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('errorEmbeds.command', data.lang, {
                    "ERROR_CODE": "Invalid location argument",
                })
            );
            return;
        }

        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'pxlvrs.net, me@joshsevero.dev',
                }
            });

            // Assuming the response contains the APC status in text format
            const apcStatusText = response.data;

            // Now you can process the apcStatusText to extract the desired information
            // For example, you can split the text by lines and extract specific fields

            // Example extraction:
            const lines = apcStatusText.split('\n');
            const modelLine = lines.find(line => line.startsWith('MODEL'));
            const model = modelLine.split(':')[1].trim();

            // Extracting BCHARGE and TIMELEFT
            const bchargeLine = lines.find(line => line.startsWith('BCHARGE'));
            const bcharge = bchargeLine.split(':')[1].trim();

            const timeleftLine = lines.find(line => line.startsWith('TIMELEFT'));
            const timeleft = timeleftLine.split(':')[1].trim();

            // Extracting STATUS
            const statusLine = lines.find(line => line.startsWith('STATUS'));
            const status = statusLine.split(':')[1].trim();

            await InteractionUtils.send(
                intr,
                Lang.getEmbed('displayEmbeds.apcstatus', data.lang, {
                    SERVER: args.location,
                    MODEL: model,
                    BCHARGE: bcharge,
                    TIMELEFT: timeleft,
                    STATUS: status,
                    // Add other extracted fields here...
                })
            );
        } catch (error) {
            console.error(error);
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('errorEmbeds.command', data.lang, {
                    "ERROR_CODE": error.code,
                })
            );
        }
    }
}

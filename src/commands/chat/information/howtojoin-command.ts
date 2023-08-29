import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Language } from '../../../models/enum-helpers/index.js';
import { EventData } from '../../../models/internal-models.js';
import { Lang } from '../../../services/index.js';
import { InteractionUtils } from '../../../utils/index.js';
import { Command, CommandDeferType } from '../../index.js';

export class HowToJoinCommand implements Command {
    public names = [Lang.getRef('chatCommands.howtojoin', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            Platform: intr.options.getString(Lang.getRef('arguments.platform', Language.Default)),
        };

        if (args.Platform) {
            const platformUpper = args.Platform.toUpperCase();
            if (platformUpper === 'PC') {
                // For Java Edition
                await InteractionUtils.send(
                    intr,
                    Lang.getEmbed('displayEmbeds.howtojoinjava', data.lang)
                );
            } else if (['XBOX', 'PLAYSTATION', 'MOBILE'].includes(platformUpper)) {
                // For Bedrock Edition
                await InteractionUtils.send(
                    intr,
                    Lang.getEmbed('displayEmbeds.howtojoinbedrock', Language.Default)
                );
            } else {
                // Handle invalid platform
                await InteractionUtils.send(
                    intr,
                    'Invalid platform. Please provide either "PC", "Xbox", "Playstation", or "Mobile".'
                );
            }
        }
    }
}

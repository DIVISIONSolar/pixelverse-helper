import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Language } from '../../../models/enum-helpers/index.js';
import { EventData } from '../../../models/internal-models.js';
import { Lang } from '../../../services/index.js';
import { InteractionUtils } from '../../../utils/index.js';
import { Command, CommandDeferType } from '../../index.js';

export class MapCommand implements Command {
    public names = [Lang.getRef('chatCommands.map', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            Server: intr.options.getString(Lang.getRef('arguments.server', Language.Default)),
        };

        // Check if the user entered "Survival"
        if (args.Server.toLowerCase() === "survival") {
            await intr.reply('Here is the link for Survival: https://map.pxlvrs.net/survival');
        }

        // Check if the user entered "LifeSteal"
        else if (args.Server.toLowerCase() === "lifesteal") {
            await intr.reply('Here is the link for LifeSteal: https://map.pxlvrs.net/lifesteal');
        }

        // If the input is not recognized, provide valid inputs
        else {
            await intr.reply('Invalid input. Valid options are: Survival, LifeSteal');
        }
    }
}
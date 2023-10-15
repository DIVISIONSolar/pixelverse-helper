import { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord.js';

import { DevCommandName, HelpOption, InfoOption } from '../enums/index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export class Args {
    public static readonly DEV_COMMAND: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.command', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.command'),
        description: Lang.getRef('argDescs.devCommand', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.devCommand'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('devCommandNames.info', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('devCommandNames.info'),
                value: DevCommandName.INFO,
            },
        ],
    };
    public static readonly HELP_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('helpOptionDescs.contactSupport', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.contactSupport'),
                value: HelpOption.CONTACT_SUPPORT,
            },
            {
                name: Lang.getRef('helpOptionDescs.commands', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.commands'),
                value: HelpOption.COMMANDS,
            },
        ],
    };
    public static readonly INFO_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('infoOptions.about', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.about'),
                value: InfoOption.ABOUT,
            },
            {
                name: Lang.getRef('infoOptions.translate', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.translate'),
                value: InfoOption.TRANSLATE,
            },
        ],
    };
    public static readonly platform: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.platform', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.platform'),
        description: Lang.getRef('argDescs.platform', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.platform'),
        type: ApplicationCommandOptionType.String,
    };
    public static readonly server: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.server', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.server'),
        description: Lang.getRef('argDescs.server', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.server'),
        type: ApplicationCommandOptionType.String,
    };
    public static readonly upslocation: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.upslocation', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.upslocation'),
        description: Lang.getRef('argDescs.upslocation', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.upslocation'),
        type: ApplicationCommandOptionType.String,
    };
}

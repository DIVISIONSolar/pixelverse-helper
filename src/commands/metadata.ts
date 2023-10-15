import {
    ApplicationCommandType,
    PermissionFlagsBits,
    PermissionsBitField,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';

import { Args } from './index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export const ChatCommandMetadata: {
    [command: string]: RESTPostAPIChatInputApplicationCommandsJSONBody;
} = {
    DEV: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.dev', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.dev'),
        description: Lang.getRef('commandDescs.dev', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.dev'),
        dm_permission: true,
        default_member_permissions: PermissionsBitField.resolve([
            PermissionFlagsBits.Administrator,
        ]).toString(),
        options: [
            {
                ...Args.DEV_COMMAND,
                required: true,
            },
        ],
    },
    HELP: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.help', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.help'),
        description: Lang.getRef('commandDescs.help', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.help'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.HELP_OPTION,
                required: true,
            },
        ],
    },
    INFO: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.info', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.info'),
        description: Lang.getRef('commandDescs.info', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.info'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.INFO_OPTION,
                required: true,
            },
        ],
    },
    TEST: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.test', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.test'),
        description: Lang.getRef('commandDescs.test', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    CHECKSTATUS: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.checkstatus', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.checkstatus'),
        description: Lang.getRef('commandDescs.checkstatus', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.checkstatus'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    HOWTOJOIN: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.howtojoin', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.howtojoin'),
        description: Lang.getRef('commandDescs.howtojoin', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.howtojoin'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.platform,
                required: true,
            },
        ],
    },
    MAP: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.map', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.map'),
        description: Lang.getRef('commandDescs.map', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.map'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.server,
                required: true,
            },
        ],
    },
    UPSLOCATION: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.upsstatus', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.upsstatus'),
        description: Lang.getRef('commandDescs.upsstatus', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.upsstatus'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.upslocation,
                required: true,
            },
        ],
    },
};

export const MessageCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_SENT: {
        type: ApplicationCommandType.Message,
        name: Lang.getRef('messageCommands.viewDateSent', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

export const UserCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_JOINED: {
        type: ApplicationCommandType.User,
        name: Lang.getRef('userCommands.viewDateJoined', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

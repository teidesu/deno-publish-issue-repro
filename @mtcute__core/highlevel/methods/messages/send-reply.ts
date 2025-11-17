import type { ITelegramClient } from "../../client.types.ts";
import type { Message } from "../../types/messages/message.ts";
import type { ParametersSkip2 } from "../../types/utils.ts";
import { sendMediaGroup } from "./send-media-group.ts";
import { sendMedia } from "./send-media.ts";
import { sendText } from "./send-text.ts";
/** Send a text in reply to a given message */
export function replyText(client: ITelegramClient, message: Message, ...params: ParametersSkip2<typeof sendText>): ReturnType<typeof sendText> {
    const [text, params_ = {}] = params;
    params_.replyTo = message.id;
    return sendText(client, message.chat.inputPeer, text, params_);
}
/** Send a media in reply to a given message */
export function replyMedia(client: ITelegramClient, message: Message, ...params: ParametersSkip2<typeof sendMedia>): ReturnType<typeof sendMedia> {
    const [media, params_ = {}] = params;
    params_.replyTo = message.id;
    return sendMedia(client, message.chat.inputPeer, media, params_);
}
/** Send a media group in reply to a given message */
export function replyMediaGroup(client: ITelegramClient, message: Message, ...params: ParametersSkip2<typeof sendMediaGroup>): ReturnType<typeof sendMediaGroup> {
    const [media, params_ = {}] = params;
    params_.replyTo = message.id;
    return sendMediaGroup(client, message.chat.inputPeer, media, params_);
}

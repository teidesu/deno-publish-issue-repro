import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtInvalidPeerTypeError } from "../../types/index.ts";
import { isInputPeerChannel, isInputPeerChat, toInputChannel } from "../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Change chat title
 *
 * You must be an administrator and have the appropriate permissions.
 *
 * @param chatId  Chat ID or username
 * @param title  New chat title, 1-255 characters
 */
export async function setChatTitle(client: ITelegramClient, chatId: InputPeerLike, title: string): Promise<void> {
    const chat = await resolvePeer(client, chatId);
    let res;
    if (isInputPeerChat(chat)) {
        res = await client.call({
            _: 'messages.editChatTitle',
            chatId: chat.chatId,
            title,
        });
    }
    else if (isInputPeerChannel(chat)) {
        res = await client.call({
            _: 'channels.editTitle',
            channel: toInputChannel(chat),
            title,
        });
    }
    else {
        throw new MtInvalidPeerTypeError(chatId, 'chat or channel');
    }
    client.handleClientUpdate(res);
}

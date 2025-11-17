import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtInvalidPeerTypeError } from "../../types/index.ts";
import { isInputPeerChannel, isInputPeerChat, toInputChannel } from "../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Delete a chat photo
 *
 * You must be an administrator and have the appropriate permissions.
 *
 * @param chatId  Chat ID or username
 */
export async function deleteChatPhoto(client: ITelegramClient, chatId: InputPeerLike): Promise<void> {
    const chat = await resolvePeer(client, chatId);
    let res;
    if (isInputPeerChat(chat)) {
        res = await client.call({
            _: 'messages.editChatPhoto',
            chatId: chat.chatId,
            photo: { _: 'inputChatPhotoEmpty' },
        });
    }
    else if (isInputPeerChannel(chat)) {
        res = await client.call({
            _: 'channels.editPhoto',
            channel: toInputChannel(chat),
            photo: { _: 'inputChatPhotoEmpty' },
        });
    }
    else {
        throw new MtInvalidPeerTypeError(chatId, 'chat or channel');
    }
    client.handleClientUpdate(res);
}

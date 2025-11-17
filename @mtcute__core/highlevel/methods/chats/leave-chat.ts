import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtInvalidPeerTypeError } from "../../types/index.ts";
import { isInputPeerChannel, isInputPeerChat, toInputChannel } from "../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { deleteHistory } from "./delete-history.ts";
/**
 * Leave a group chat, supergroup or channel
 *
 * @param chatId  Chat ID or username
 */
export async function leaveChat(client: ITelegramClient, chatId: InputPeerLike, params?: {
    /**
     * Whether to clear history after leaving (only for legacy group chats)
     */
    clear?: boolean;
}): Promise<void> {
    const chat = await resolvePeer(client, chatId);
    if (isInputPeerChannel(chat)) {
        const res = await client.call({
            _: 'channels.leaveChannel',
            channel: toInputChannel(chat),
        });
        client.handleClientUpdate(res);
    }
    else if (isInputPeerChat(chat)) {
        const res = await client.call({
            _: 'messages.deleteChatUser',
            chatId: chat.chatId,
            userId: { _: 'inputUserSelf' },
        });
        client.handleClientUpdate(res);
        if (params?.clear) {
            await deleteHistory(client, chat);
        }
    }
    else {
        throw new MtInvalidPeerTypeError(chatId, 'chat or channel');
    }
}

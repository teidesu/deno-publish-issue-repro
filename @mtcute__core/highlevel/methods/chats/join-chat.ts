import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { Chat } from "../../types/index.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
import { INVITE_LINK_REGEX } from "../../utils/peer-utils.ts";
import { resolveChannel } from "../users/resolve-peer.ts";
/**
 * Join a channel or supergroup
 *
 * When using with invite links, this method may throw RPC error
 * `INVITE_REQUEST_SENT`, which means that you need to wait for admin approval.
 * You will get into the chat once they do so.
 *
 * @param chatId
 *   Chat identifier. Either an invite link (`t.me/joinchat/*`), a username (`@username`)
 *   or ID of the linked supergroup or channel.
 */
export async function joinChat(client: ITelegramClient, chatId: InputPeerLike): Promise<Chat> {
    if (typeof chatId === 'string') {
        const m = chatId.match(INVITE_LINK_REGEX);
        if (m) {
            const res = await client.call({
                _: 'messages.importChatInvite',
                hash: m[1],
            });
            assertIsUpdatesGroup('messages.importChatInvite', res);
            client.handleClientUpdate(res);
            return new Chat(res.chats[0]);
        }
    }
    const res = await client.call({
        _: 'channels.joinChannel',
        channel: await resolveChannel(client, chatId),
    });
    assertIsUpdatesGroup('channels.joinChannel', res);
    client.handleClientUpdate(res);
    return new Chat(res.chats[0]);
}

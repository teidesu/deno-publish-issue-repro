import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Mark a chat as unread
 *
 * @param chatId  Chat ID
 */
export async function markChatUnread(client: ITelegramClient, chatId: InputPeerLike): Promise<void> {
    const r = await client.call({
        _: 'messages.markDialogUnread',
        peer: {
            _: 'inputDialogPeer',
            peer: await resolvePeer(client, chatId),
        },
        unread: true,
    });
    assertTrue('messages.markDialogUnread', r);
}

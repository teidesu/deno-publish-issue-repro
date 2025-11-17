import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Delete scheduled messages by their IDs.
 *
 * @param chatId  Chat's marked ID, its username, phone or `"me"` or `"self"`.
 * @param ids  Message(s) ID(s) to delete.
 */
export async function deleteScheduledMessages(client: ITelegramClient, chatId: InputPeerLike, ids: number[]): Promise<void> {
    const peer = await resolvePeer(client, chatId);
    const res = await client.call({
        _: 'messages.deleteScheduledMessages',
        peer,
        id: ids,
    });
    client.handleClientUpdate(res);
}

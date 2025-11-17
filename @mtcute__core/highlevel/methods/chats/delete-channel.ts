import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolveChannel } from "../users/resolve-peer.ts";
// @alias=deleteSupergroup
/**
 * Delete a channel or a supergroup
 *
 * @param chatId  Chat ID or username
 */
export async function deleteChannel(client: ITelegramClient, chatId: InputPeerLike): Promise<void> {
    const res = await client.call({
        _: 'channels.deleteChannel',
        channel: await resolveChannel(client, chatId),
    });
    client.handleClientUpdate(res);
}

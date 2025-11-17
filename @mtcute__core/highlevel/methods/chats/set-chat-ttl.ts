import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Set maximum Time-To-Live of all newly sent messages in the specified chat
 *
 * @param chatId  Chat ID
 * @param period  New TTL period, in seconds (or 0 to disable)
 */
export async function setChatTtl(client: ITelegramClient, chatId: InputPeerLike, period: number): Promise<void> {
    await client.call({
        _: 'messages.setHistoryTTL',
        peer: await resolvePeer(client, chatId),
        period,
    });
}

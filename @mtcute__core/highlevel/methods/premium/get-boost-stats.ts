import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { BoostStats } from "../../types/premium/boost-stats.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
// @available=user
/**
 * Get information about boosts in a channel
 *
 * @returns  IDs of stories that were removed
 */
export async function getBoostStats(client: ITelegramClient, peerId: InputPeerLike): Promise<BoostStats> {
    const res = await client.call({
        _: 'premium.getBoostsStatus',
        peer: await resolvePeer(client, peerId),
    });
    return new BoostStats(res);
}

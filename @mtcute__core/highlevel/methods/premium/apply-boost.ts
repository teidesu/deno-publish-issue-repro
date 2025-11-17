import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Boost a given channel
 *
 * @param peerId  Peer ID to boost
 */
export async function applyBoost(client: ITelegramClient, peerId: InputPeerLike): Promise<void> {
    await client.call({
        _: 'premium.applyBoost',
        peer: await resolvePeer(client, peerId),
    });
}

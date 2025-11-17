import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { PeerSettings, PeersIndex } from "../../types/index.ts";
import { resolvePeer } from "./resolve-peer.ts";
/** Get {@link PeerSettings} for a peer */
export async function getPeerSettings(client: ITelegramClient, peerId: InputPeerLike): Promise<PeerSettings> {
    const res = await client.call({
        _: 'messages.getPeerSettings',
        peer: await resolvePeer(client, peerId),
    });
    const peers = PeersIndex.from(res);
    return new PeerSettings(res.settings, peers);
}

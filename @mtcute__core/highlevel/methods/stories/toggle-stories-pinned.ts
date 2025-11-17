import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Toggle one or more stories pinned status
 *
 * @returns  IDs of stories that were toggled
 */
export async function toggleStoriesPinned(client: ITelegramClient, params: {
    /**
     * Story ID(s) to toggle
     */
    ids: MaybeArray<number>;
    /**
     * Whether to pin or unpin the story
     */
    pinned: boolean;
    /**
     * Peer ID whose stories to toggle
     *
     * @default  `self`
     */
    peer?: InputPeerLike;
}): Promise<number[]> {
    const { ids, pinned, peer = 'me' } = params;
    return client.call({
        _: 'stories.togglePinned',
        peer: await resolvePeer(client, peer),
        id: Array.isArray(ids) ? ids : [ids],
        pinned,
    });
}

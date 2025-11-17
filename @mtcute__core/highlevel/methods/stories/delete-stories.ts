import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Delete a story
 *
 * @returns  IDs of stories that were removed
 */
export async function deleteStories(client: ITelegramClient, params: {
    /**
     * Story IDs to delete
     */
    ids: MaybeArray<number>;
    /**
     * Peer ID whose stories to delete
     *
     * @default  `self`
     */
    peer?: InputPeerLike;
}): Promise<number[]> {
    const { ids, peer = 'me' } = params;
    return client.call({
        _: 'stories.deleteStories',
        peer: await resolvePeer(client, peer),
        id: Array.isArray(ids) ? ids : [ids],
    });
}

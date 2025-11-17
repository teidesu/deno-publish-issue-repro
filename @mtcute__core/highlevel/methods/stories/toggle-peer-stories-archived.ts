import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Toggle whether peer's stories are archived (hidden) or not.
 *
 * This **does not** archive the chat with that peer, only stories.
 */
export async function togglePeerStoriesArchived(client: ITelegramClient, peerId: InputPeerLike, archived: boolean): Promise<void> {
    const r = await client.call({
        _: 'stories.togglePeerStoriesHidden',
        peer: await resolvePeer(client, peerId),
        hidden: archived,
    });
    assertTrue('stories.togglePeerStoriesHidden', r);
}

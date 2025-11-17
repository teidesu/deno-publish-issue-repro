import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike, InputReaction } from "../../types/index.ts";
import { normalizeInputReaction } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Send (or remove) a reaction to a story
 */
export async function sendStoryReaction(client: ITelegramClient, params: {
    peerId: InputPeerLike;
    storyId: number;
    reaction: InputReaction;
    /**
     * Whether to add this reaction to recently used
     */
    addToRecent?: boolean;
}): Promise<void> {
    const { peerId, storyId, reaction, addToRecent } = params;
    const res = await client.call({
        _: 'stories.sendReaction',
        peer: await resolvePeer(client, peerId),
        storyId,
        reaction: normalizeInputReaction(reaction),
        addToRecent,
    });
    client.handleClientUpdate(res, true);
}

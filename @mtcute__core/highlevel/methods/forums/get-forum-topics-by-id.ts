import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { ForumTopic } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Get forum topics by their IDs
 *
 * @param chatId  Chat ID or username
 */
export async function getForumTopicsById(client: ITelegramClient, chatId: InputPeerLike, ids: MaybeArray<number>): Promise<ForumTopic[]> {
    if (!Array.isArray(ids))
        ids = [ids];
    const res = await client.call({
        _: 'messages.getForumTopicsByID',
        peer: await resolvePeer(client, chatId),
        topics: ids,
    });
    return ForumTopic.parseTlForumTopics(res);
}

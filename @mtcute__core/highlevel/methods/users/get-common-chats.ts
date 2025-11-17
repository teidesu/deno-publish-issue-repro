import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { Chat } from "../../types/index.ts";
import { resolveUser } from "./resolve-peer.ts";
/**
 * Get a list of common chats you have with a given user
 *
 * @param userId  User's ID, username or phone number
 * @throws MtInvalidPeerTypeError
 */
export async function getCommonChats(client: ITelegramClient, userId: InputPeerLike): Promise<Chat[]> {
    return client
        .call({
        _: 'messages.getCommonChats',
        userId: await resolveUser(client, userId),
        maxId: 0,
        limit: 100,
    })
        .then(res => res.chats.map(it => new Chat(it)));
}

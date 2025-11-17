import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtPeerNotFoundError, User } from "../../types/index.ts";
import { resolveUser } from "../users/resolve-peer.ts";
import { _getUsersBatched } from "./batched-queries.ts";
// @available=both
/**
 * Get basic information about a user.
 *
 * @param userId  ID of the user or their username or invite link
 */
export async function getUser(client: ITelegramClient, userId: InputPeerLike): Promise<User> {
    const peer = await resolveUser(client, userId);
    const res = await _getUsersBatched(client, peer);
    if (!res)
        throw new MtPeerNotFoundError(`User ${JSON.stringify(userId)} was not found`);
    return new User(res);
}

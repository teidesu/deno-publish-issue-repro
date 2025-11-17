import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { FullUser } from "../../types/index.ts";
import { resolveUser } from "../users/resolve-peer.ts";
// @available=both
/**
 * Get full information about a user.
 *
 * @param userId  ID of the user or their username
 */
export async function getFullUser(client: ITelegramClient, userId: InputPeerLike): Promise<FullUser> {
    const peer = await resolveUser(client, userId);
    const res = await client.call({
        _: 'users.getFullUser',
        id: peer,
    });
    return new FullUser(res);
}

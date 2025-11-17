import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { User } from "../../types/index.ts";
import { toInputUser } from "../../utils/peer-utils.ts";
import { _getUsersBatched } from "../chats/batched-queries.ts";
import { resolvePeerMany } from "./resolve-peer-many.ts";
import { resolveUser } from "./resolve-peer.ts";
/**
 * Get information about multiple users.
 * You can retrieve up to 200 users at once.
 *
 * Note that order is not guaranteed.
 *
 * @param ids  Users' identifiers. Can be ID, username, phone number, `"me"`, `"self"` or TL object
 */
export async function getUsers(client: ITelegramClient, ids: MaybeArray<InputPeerLike>): Promise<(User | null)[]> {
    if (!Array.isArray(ids)) {
        // avoid unnecessary overhead of Promise.all and resolvePeerMany
        const res = await _getUsersBatched(client, await resolveUser(client, ids));
        return [res ? new User(res) : null];
    }
    const inputPeers = await resolvePeerMany(client, ids, toInputUser);
    // pooling will be done by the helper
    const res = await Promise.all(inputPeers.map(peer => _getUsersBatched(client, peer)));
    return res.map(it => (it ? new User(it) : null));
}

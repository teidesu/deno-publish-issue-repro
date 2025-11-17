import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { toInputUser } from "../../utils/index.ts";
import { resolvePeerMany } from "./resolve-peer-many.ts";
/**
 * Edit "close friends" list directly using user IDs
 *
 * @param ids  User IDs
 */
export async function editCloseFriendsRaw(client: ITelegramClient, ids: number[]): Promise<void> {
    const r = await client.call({
        _: 'contacts.editCloseFriends',
        id: ids,
    });
    assertTrue('contacts.editCloseFriends', r);
}
/**
 * Edit "close friends" list using `InputPeerLike`s
 *
 * @param ids  User IDs
 */
export async function editCloseFriends(client: ITelegramClient, ids: InputPeerLike[]): Promise<void> {
    const r = await client.call({
        _: 'contacts.editCloseFriends',
        id: await resolvePeerMany(client, ids, toInputUser).then(r => r.map((u) => {
            if ('userId' in u)
                return u.userId;
            return 0;
        })),
    });
    assertTrue('contacts.editCloseFriends', r);
}

import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtInvalidPeerTypeError, User } from "../../types/index.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
import { toInputUser } from "../../utils/peer-utils.ts";
import { resolvePeerMany } from "../users/resolve-peer-many.ts";
/**
 * Delete one or more contacts from your Telegram contacts list
 *
 * Returns deleted contact's profiles. Does not return
 * profiles of users that were not in your contacts list
 *
 * @param userIds  User IDs, usernames or phone numbers
 */
export async function deleteContacts(client: ITelegramClient, userIds: MaybeArray<InputPeerLike>): Promise<User[]> {
    if (!Array.isArray(userIds))
        userIds = [userIds];
    const inputPeers = await resolvePeerMany(client, userIds, toInputUser);
    if (!inputPeers.length) {
        throw new MtInvalidPeerTypeError('all provided ids', 'user');
    }
    const res = await client.call({
        _: 'contacts.deleteContacts',
        id: inputPeers,
    });
    assertIsUpdatesGroup('contacts.deleteContacts', res);
    client.handleClientUpdate(res);
    return res.users.map(user => new User(user));
}

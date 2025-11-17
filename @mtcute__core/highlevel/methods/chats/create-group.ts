import type { tl } from '@mtcute/tl';
import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { Chat } from "../../types/index.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
import { toInputUser } from "../../utils/peer-utils.ts";
import { resolvePeerMany } from "../users/resolve-peer-many.ts";
// @exported
export interface CreateGroupResult {
    /** Chat that was created */
    chat: Chat;
    /** Users that were failed to be invited */
    missing: tl.RawMissingInvitee[];
}
/**
 * Create a legacy group chat
 *
 * If you want to create a supergroup, use {@link createSupergroup}
 * instead.
 */
export async function createGroup(client: ITelegramClient, params: {
    /**
     * Group title
     */
    title: string;
    /**
     * User(s) to be invited in the group (ID(s), username(s) or phone number(s)).
     * Due to Telegram limitations, you can't create a legacy group with just yourself.
     */
    users: MaybeArray<InputPeerLike>;
    /**
     * TTL period (in seconds) for the newly created chat
     *
     * @default 0 (i.e. messages don't expire)
     */
    ttlPeriod?: number;
}): Promise<CreateGroupResult> {
    const { title } = params;
    let { users } = params;
    if (!Array.isArray(users))
        users = [users];
    const peers = await resolvePeerMany(client, users, toInputUser);
    const { updates, missingInvitees } = await client.call({
        _: 'messages.createChat',
        title,
        users: peers,
    });
    assertIsUpdatesGroup('messages.createChat', updates);
    client.handleClientUpdate(updates);
    return {
        chat: new Chat(updates.chats[0]),
        missing: missingInvitees,
    };
}

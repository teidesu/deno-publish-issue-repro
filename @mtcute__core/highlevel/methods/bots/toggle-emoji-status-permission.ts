import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolveUser } from "../users/resolve-peer.ts";
/**
 * Give or revoke permission for a bot to update emoji status for your account
 */
export async function toggleEmojiStatusPermission(client: ITelegramClient, params: {
    /** Bot to which the permission should be granted/revoked */
    userId: InputPeerLike;
    /** Whether to grant or revoke permission */
    allow: boolean;
}): Promise<void> {
    const { userId, allow, } = params;
    const r = await client.call({
        _: 'bots.toggleUserEmojiStatusPermission',
        bot: await resolveUser(client, userId),
        enabled: allow,
    });
    assertTrue('bots.toggleUserEmojiStatusPermission', r);
}

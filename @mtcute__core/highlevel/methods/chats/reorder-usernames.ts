import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { isInputPeerChannel, isInputPeerUser, toInputChannel, toInputUser } from "../../utils/index.ts";
import { isSelfPeer } from "../auth/utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Reorder usernames
 *
 * @param peerId  Bot, channel or "me"/"self"
 */
export async function reorderUsernames(client: ITelegramClient, peerId: InputPeerLike, order: string[]): Promise<void> {
    const peer = await resolvePeer(client, peerId);
    if (isInputPeerUser(peer)) {
        // either a bot or self
        if (isSelfPeer(client, peer)) {
            // self
            const r = await client.call({
                _: 'account.reorderUsernames',
                order,
            });
            assertTrue('account.reorderUsernames', r);
            return;
        }
        // bot
        const r = await client.call({
            _: 'bots.reorderUsernames',
            bot: toInputUser(peer, peerId),
            order,
        });
        assertTrue('bots.reorderUsernames', r);
    }
    else if (isInputPeerChannel(peer)) {
        const r = await client.call({
            _: 'channels.reorderUsernames',
            channel: toInputChannel(peer, peerId),
            order,
        });
        assertTrue('channels.reorderUsernames', r);
    }
}

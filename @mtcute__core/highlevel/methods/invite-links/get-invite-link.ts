import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { ChatInviteLink, PeersIndex } from "../../types/index.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Get detailed information about an invite link
 *
 * @param chatId  Chat ID
 * @param link  The invite link
 */
export async function getInviteLink(client: ITelegramClient, chatId: InputPeerLike, link: string): Promise<ChatInviteLink> {
    const res = await client.call({
        _: 'messages.getExportedChatInvite',
        peer: await resolvePeer(client, chatId),
        link,
    });
    const peers = PeersIndex.from(res);
    return new ChatInviteLink(res.invite, peers);
}

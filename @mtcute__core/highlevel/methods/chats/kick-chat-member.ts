import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike, Message } from "../../types/index.ts";
import { sleepWithAbort } from "../../../utils/misc-utils.ts";
import { isInputPeerChannel } from "../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { banChatMember } from "./ban-chat-member.ts";
import { unbanChatMember } from "./unban-chat-member.ts";
/**
 * Kick a user from a chat.
 *
 * This effectively bans a user and immediately unbans them.
 *
 *  @returns  Service message about removed user, if one was generated.
 */
export async function kickChatMember(client: ITelegramClient, params: {
    /** Chat ID */
    chatId: InputPeerLike;
    /** User ID */
    userId: InputPeerLike;
}): Promise<Message | null> {
    const { chatId, userId } = params;
    const chat = await resolvePeer(client, chatId);
    const user = await resolvePeer(client, userId);
    const msg = await banChatMember(client, { chatId: chat, participantId: user });
    // not needed in case this is a legacy group
    if (isInputPeerChannel(chat)) {
        // i fucking love telegram serverside race conditions
        await sleepWithAbort(1000, client.stopSignal);
        await unbanChatMember(client, { chatId: chat, participantId: user });
    }
    return msg;
}

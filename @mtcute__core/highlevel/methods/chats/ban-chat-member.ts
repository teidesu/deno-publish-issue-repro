import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike, Message } from "../../types/index.ts";
import { MtInvalidPeerTypeError } from "../../types/index.ts";
import { normalizeDate } from "../../utils/index.ts";
import { isInputPeerChannel, isInputPeerChat, toInputChannel, toInputUser } from "../../utils/peer-utils.ts";
import { _findMessageInUpdate } from "../messages/find-in-update.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Ban a user/channel from a legacy group, a supergroup or a channel.
 * They will not be able to re-join the group on their own,
 * manual administrator's action will be required.
 *
 * When banning a channel, the user won't be able to use
 * any of their channels to post until the ban is lifted.
 *
 * @returns  Service message about removed user, if one was generated.
 */
export async function banChatMember(client: ITelegramClient, params: {
    /** Chat ID */
    chatId: InputPeerLike;
    /** ID of the user/channel to ban */
    participantId: InputPeerLike;
    untilDate?: number | Date;
    /**
     * Whether to dispatch the returned service message (if any)
     * to the client's update handler.
     */
    shouldDispatch?: true;
}): Promise<Message | null> {
    const { chatId, participantId, shouldDispatch } = params;
    const chat = await resolvePeer(client, chatId);
    const peer = await resolvePeer(client, participantId);
    let res;
    if (isInputPeerChannel(chat)) {
        res = await client.call({
            _: 'channels.editBanned',
            channel: toInputChannel(chat),
            participant: peer,
            bannedRights: {
                _: 'chatBannedRights',
                untilDate: normalizeDate(params?.untilDate) ?? 0,
                viewMessages: true,
            },
        });
    }
    else if (isInputPeerChat(chat)) {
        res = await client.call({
            _: 'messages.deleteChatUser',
            chatId: chat.chatId,
            userId: toInputUser(peer),
        });
    }
    else {
        throw new MtInvalidPeerTypeError(chatId, 'chat or channel');
    }
    return _findMessageInUpdate(client, res, false, !shouldDispatch, true);
}

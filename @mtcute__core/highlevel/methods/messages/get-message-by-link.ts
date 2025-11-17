import type { ITelegramClient } from "../../client.types.ts";
import type { Message } from "../../types/messages/index.ts";
import { MtArgumentError } from "../../../types/errors.ts";
import { links } from "../../../utils/links/index.ts";
import { toggleChannelIdMark } from "../../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { _getDiscussionMessage } from "./get-discussion-message.ts";
import { getMessages } from "./get-messages.ts";
/**
 * Given a message link (e.g. `t.me/durov/1`), fetch the relevant message.
 */
export async function getMessageByLink(client: ITelegramClient, link: string): Promise<Message | null> {
    const parsed = links.message.parse(link);
    if (!parsed) {
        throw new MtArgumentError(`Invalid message link: ${link}`);
    }
    let peer;
    if ('username' in parsed) {
        peer = await resolvePeer(client, parsed.username);
    }
    else {
        peer = await resolvePeer(client, toggleChannelIdMark(parsed.channelId));
    }
    let msgId = parsed.id;
    if (parsed.commentId) {
        [peer] = await _getDiscussionMessage(client, peer, parsed.id);
        msgId = parsed.commentId;
    }
    const [msg] = await getMessages(client, peer, msgId);
    return msg;
}

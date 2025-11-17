import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import type { ReplyMarkup } from "../../types/bots/keyboards/index.ts";
import type { InputText } from "../../types/misc/entities.ts";
import type { InputPeerLike } from "../../types/peers/index.ts";
import type { CommonSendParams } from "./send-common.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { randomLong } from "../../../utils/long-utils.ts";
import { getMarkedPeerId } from "../../../utils/peer-utils.ts";
import { BotKeyboard } from "../../types/bots/keyboards/index.ts";
import { Message } from "../../types/messages/message.ts";
import { PeersIndex } from "../../types/peers/index.ts";
import { createDummyUpdate } from "../../updates/utils.ts";
import { inputPeerToPeer } from "../../utils/peer-utils.ts";
import { _getRawPeerBatched } from "../chats/batched-queries.ts";
import { _normalizeInputText } from "../misc/normalize-text.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { _maybeInvokeWithBusinessConnection } from "./_business-connection.ts";
import { _findMessageInUpdate } from "./find-in-update.ts";
import { _processCommonSendParameters } from "./send-common.ts";
/**
 * Send a text message
 *
 * @param chatId  ID of the chat, its username, phone or `"me"` or `"self"`
 * @param text  Text of the message
 * @param params  Additional sending parameters
 */
export async function sendText(client: ITelegramClient, chatId: InputPeerLike, text: InputText, params?: CommonSendParams & {
    /**
     * For bots: inline or reply markup or an instruction
     * to hide a reply keyboard or to force a reply.
     */
    replyMarkup?: ReplyMarkup;
    /**
     * Whether to disable links preview in this message
     */
    disableWebPreview?: boolean;
    /**
     * Whether to invert media position.
     *
     * Currently only supported for web previews and makes the
     * client render the preview above the caption and not below.
     */
    invertMedia?: boolean;
}): Promise<Message> {
    if (!params)
        params = {};
    const [message, entities] = await _normalizeInputText(client, text);
    const replyMarkup = BotKeyboard._convertToTl(params.replyMarkup);
    const { peer, replyTo, scheduleDate, chainId, quickReplyShortcut } = await _processCommonSendParameters(client, chatId, params);
    const randomId = randomLong();
    const res = await _maybeInvokeWithBusinessConnection(client, params.businessConnectionId, {
        _: 'messages.sendMessage',
        peer,
        noWebpage: params.disableWebPreview,
        silent: params.silent,
        replyTo,
        randomId,
        scheduleDate,
        replyMarkup,
        message,
        entities,
        clearDraft: params.clearDraft,
        noforwards: params.forbidForwards,
        sendAs: params.sendAs ? await resolvePeer(client, params.sendAs) : undefined,
        invertMedia: params.invertMedia,
        quickReplyShortcut,
        effect: params.effect,
        allowPaidFloodskip: params.allowPaidFloodskip,
        allowPaidStars: params.allowPaidMessages,
    }, { chainId, abortSignal: params.abortSignal });
    if (res._ === 'updateShortSentMessage') {
        // todo extract this to updates manager?
        const msg: tl.RawMessage = {
            _: 'message',
            id: res.id,
            peerId: inputPeerToPeer(peer),
            fromId: { _: 'peerUser', userId: client.storage.self.getCached()!.userId },
            message,
            date: res.date,
            out: res.out,
            replyMarkup,
            entities: res.entities,
        };
        if (!params.shouldDispatch) {
            client.handleClientUpdate(createDummyUpdate(res.pts, res.ptsCount));
        }
        const peers = new PeersIndex();
        const fetchPeer = async (peer: tl.TypePeer | tl.TypeInputPeer): Promise<void> => {
            const id = getMarkedPeerId(peer);
            let cached = await client.storage.peers.getCompleteById(id);
            if (!cached) {
                cached = await _getRawPeerBatched(client, await resolvePeer(client, peer));
            }
            if (!cached) {
                throw new MtTypeAssertionError('sendText (@ getFullPeerById)', 'user | chat', 'null');
            }
            switch (cached._) {
                case 'user':
                    peers.users.set(cached.id, cached);
                    break;
                case 'chat':
                case 'chatForbidden':
                case 'channel':
                case 'channelForbidden':
                    peers.chats.set(cached.id, cached);
                    break;
                default:
                    throw new MtTypeAssertionError('sendText (@ users.getUsers)', 'user | chat | channel', // not very accurate, but good enough
                    cached._);
            }
        };
        await Promise.all([fetchPeer(peer), fetchPeer(msg.fromId!)]);
        const ret = new Message(msg, peers);
        return ret;
    }
    const msg = _findMessageInUpdate(client, res, false, !params.shouldDispatch, false, randomId);
    return msg;
}

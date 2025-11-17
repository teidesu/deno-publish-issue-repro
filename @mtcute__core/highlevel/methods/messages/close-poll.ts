import type { ITelegramClient } from "../../client.types.ts";
import type { InputMessageId } from "../../types/index.ts";
import Long from 'long';
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { normalizeInputMessageId, PeersIndex, Poll } from "../../types/index.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
/**
 * Close a poll sent by you.
 *
 * Once closed, poll can't be re-opened, and nobody
 * will be able to vote in it
 */
export async function closePoll(client: ITelegramClient, params: InputMessageId & {
    /**
     * Whether to dispatch the edit message event
     * to the client's update handler.
     */
    shouldDispatch?: true;
}): Promise<Poll> {
    const { chatId, message } = normalizeInputMessageId(params);
    const res = await client.call({
        _: 'messages.editMessage',
        peer: await resolvePeer(client, chatId),
        id: message,
        media: {
            _: 'inputMediaPoll',
            poll: {
                _: 'poll',
                id: Long.ZERO,
                closed: true,
                question: { _: 'textWithEntities', text: '', entities: [] },
                answers: [],
            },
        },
    });
    assertIsUpdatesGroup('messages.editMessage', res);
    client.handleClientUpdate(res, !params.shouldDispatch);
    const upd = res.updates[0];
    assertTypeIs('messages.editMessage (@ .updates[0])', upd, 'updateMessagePoll');
    if (!upd.poll) {
        throw new MtTypeAssertionError('messages.editMessage (@ .updates[0].poll)', 'poll', 'undefined');
    }
    const peers = PeersIndex.from(res);
    return new Poll(upd.poll, peers, upd.results);
}

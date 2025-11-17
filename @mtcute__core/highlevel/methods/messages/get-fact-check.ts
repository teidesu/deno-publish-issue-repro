import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { FactCheck } from "../../types/messages/fact-check.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
// @available=user
/**
 * Get fact check information for one or more messages in a chat
 *
 * @param chatId  Chat where the messages are located
 * @param msgIds  One or more message IDs
 */
export async function getFactCheck(client: ITelegramClient, chatId: InputPeerLike, msgIds: MaybeArray<number>): Promise<(FactCheck | null)[]> {
    const res = await client.call({
        _: 'messages.getFactCheck',
        peer: await resolvePeer(client, chatId),
        msgId: Array.isArray(msgIds) ? msgIds : [msgIds],
    });
    return res.map((x) => {
        if (x.hash.isZero()) {
            return null;
        }
        return new FactCheck(x);
    });
}

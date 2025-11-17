import type { tl } from '@mtcute/tl';
import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { Message, Sticker } from "../../types/index.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { LongSet } from "../../../utils/long-utils.ts";
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { parseDocument } from "../../types/media/document-utils.ts";
/**
 * Get custom emoji stickers by their IDs
 *
 * @param ids  IDs of the stickers (as defined in {@link MessageEntity.emojiId})
 */
export async function getCustomEmojis(client: ITelegramClient, ids: tl.Long[]): Promise<Sticker[]> {
    const res = await client.call({
        _: 'messages.getCustomEmojiDocuments',
        documentId: ids,
    });
    return res.map((it) => {
        assertTypeIs('getCustomEmojis', it, 'document');
        const doc = parseDocument(it);
        if (doc.type !== 'sticker') {
            throw new MtTypeAssertionError('getCustomEmojis', 'sticker', doc.type);
        }
        return doc;
    });
}
/**
 * Given one or more messages, extract all unique custom emojis from it and fetch them
 */
export async function getCustomEmojisFromMessages(client: ITelegramClient, messages: MaybeArray<Message>): Promise<Sticker[]> {
    const set = new LongSet();
    if (!Array.isArray(messages))
        messages = [messages];
    for (const { raw } of messages) {
        if (raw._ === 'messageService' || !raw.entities)
            continue;
        for (const entity of raw.entities) {
            if (entity._ === 'messageEntityCustomEmoji') {
                set.add(entity.documentId);
            }
        }
    }
    const arr = [...set];
    if (!arr.length)
        return [];
    return getCustomEmojis(client, arr);
}

import type { ITelegramClient } from "../../client.types.ts";
import type { ArrayPaginated, Audio, InputPeerLike } from "../../types/index.ts";
import { assert } from '@fuman/utils';
import Long from 'long';
import { assertTypeIs, assertTypeIsNot } from "../../../utils/type-assertions.ts";
import { parseDocument } from "../../types/media/document-utils.ts";
import { makeArrayPaginated } from "../../utils/index.ts";
import { resolveUser } from "./resolve-peer.ts";
/**
 * Get music files saved to the user's profile
 */
export async function getSavedMusic(client: ITelegramClient, params: {
    /** User ID, username, phone number, `"me"` or `"self"` */
    userId: InputPeerLike;
    /** Offset for pagination */
    offset?: number;
    /** Limit for pagination */
    limit?: number;
}): Promise<ArrayPaginated<Audio, number>> {
    const res = await client.call({
        _: 'users.getSavedMusic',
        id: await resolveUser(client, params.userId),
        offset: params.offset ?? 0,
        limit: params.limit ?? 100,
        hash: Long.ZERO,
    });
    assertTypeIsNot('getSavedMusic', res, 'users.savedMusicNotModified');
    const files: Audio[] = [];
    for (const file of res.documents) {
        assertTypeIs('getSavedMusic', file, 'document');
        const doc = parseDocument(file);
        assert(doc.type === 'audio');
        files.push(doc);
    }
    let nextOffset: number | undefined = (params.offset ?? 0) + files.length;
    if (nextOffset >= res.count)
        nextOffset = undefined;
    return makeArrayPaginated(files, res.count ?? files.length, nextOffset);
}

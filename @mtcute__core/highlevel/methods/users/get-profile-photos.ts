import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import type { ArrayPaginated, InputPeerLike } from "../../types/index.ts";
import Long from 'long';
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { Photo } from "../../types/index.ts";
import { makeArrayPaginated } from "../../utils/index.ts";
import { resolveUser } from "./resolve-peer.ts";
/**
 * Get a list of profile pictures of a user
 *
 * @param userId  User ID, username, phone number, `"me"` or `"self"`
 * @param params
 */
export async function getProfilePhotos(client: ITelegramClient, userId: InputPeerLike, params?: {
    /**
     * Offset from which to fetch.
     *
     * @default  `0`
     */
    offset?: number;
    /**
     * Maximum number of items to fetch (up to 100)
     *
     * @default  `100`
     */
    limit?: number;
}): Promise<ArrayPaginated<Photo, number>> {
    if (!params)
        params = {};
    const { offset = 0, limit = 100 } = params;
    const res = await client.call({
        _: 'photos.getUserPhotos',
        userId: await resolveUser(client, userId),
        offset,
        limit,
        maxId: Long.ZERO,
    });
    return makeArrayPaginated(res.photos.map((it) => {
        assertTypeIs('getProfilePhotos', it, 'photo');
        return new Photo(it);
    }), (res as tl.photos.RawPhotosSlice).count ?? res.photos.length, offset + res.photos.length);
}

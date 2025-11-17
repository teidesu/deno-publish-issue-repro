import type { tl } from '@mtcute/tl';
import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import { fileIdToInputPhoto } from "../../utils/convert-file-id.ts";
/**
 * Delete your own profile photos
 *
 * @param ids  ID(s) of the photos. Can be file IDs or raw TL objects
 */
export async function deleteProfilePhotos(client: ITelegramClient, ids: MaybeArray<string | tl.TypeInputPhoto>): Promise<void> {
    if (!Array.isArray(ids))
        ids = [ids];
    const photos = ids.map((id) => {
        if (typeof id === 'string') {
            return fileIdToInputPhoto(id);
        }
        return id;
    });
    await client.call({
        _: 'photos.deletePhotos',
        id: photos,
    });
}

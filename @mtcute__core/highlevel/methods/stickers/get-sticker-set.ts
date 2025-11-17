import type { ITelegramClient } from "../../client.types.ts";
import type { InputStickerSet } from "../../types/index.ts";
import { normalizeInputStickerSet, StickerSet } from "../../types/index.ts";
/**
 * Get a sticker set and stickers inside of it.
 *
 * @param setId  Sticker set identifier
 */
export async function getStickerSet(client: ITelegramClient, setId: InputStickerSet): Promise<StickerSet> {
    const res = await client.call({
        _: 'messages.getStickerSet',
        stickerset: normalizeInputStickerSet(setId),
        hash: 0,
    });
    return new StickerSet(res);
}

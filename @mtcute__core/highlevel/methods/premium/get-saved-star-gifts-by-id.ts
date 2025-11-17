import type { MaybeArray } from '@fuman/utils';
import type { ITelegramClient } from "../../client.types.ts";
import type { InputStarGift } from "../../types/premium/star-gift.ts";
import { parallelMap } from '@fuman/utils';
import { PeersIndex, SavedStarGift } from "../../types/index.ts";
import { _normalizeInputStarGift } from "./_normalize-input-star-gift.ts";
/** Get one or more saved star gifts by their IDs */
export async function getSavedStarGiftsById(client: ITelegramClient, gifts: MaybeArray<InputStarGift>): Promise<SavedStarGift[]> {
    if (!Array.isArray(gifts))
        gifts = [gifts];
    const res = await client.call({
        _: 'payments.getSavedStarGift',
        stargift: await parallelMap(gifts, it => _normalizeInputStarGift(client, it), { limit: 10 }),
    });
    const peers = PeersIndex.from(res);
    return res.gifts.map(it => new SavedStarGift(it, peers));
}

import type { ITelegramClient } from "../../client.types.ts";
import { assertTypeIsNot } from "../../../utils/type-assertions.ts";
import { PeersIndex } from "../../types/index.ts";
import { StarGift } from "../../types/premium/star-gift.ts";
// @available=user
/**
 * Get the list of available star gifts.
 */
export async function getStarGiftOptions(client: ITelegramClient): Promise<StarGift[]> {
    const res = await client.call({
        _: 'payments.getStarGifts',
        hash: 0,
    });
    assertTypeIsNot('payments.getStarGifts', res, 'payments.starGiftsNotModified');
    const peers = PeersIndex.from(res);
    const ret: StarGift[] = [];
    for (const gift of res.gifts) {
        if (gift._ === 'starGift') {
            ret.push(new StarGift(gift, peers));
        }
    }
    return ret;
}

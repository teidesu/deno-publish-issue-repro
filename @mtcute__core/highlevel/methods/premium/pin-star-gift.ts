import type { MaybeArray } from '@fuman/utils';
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/peers/peer.ts";
import type { InputStarGift } from "../../types/premium/star-gift.ts";
import { parallelMap } from '@fuman/utils';
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { _normalizeInputStarGift } from "./_normalize-input-star-gift.ts";
/**
 * Toggles whether one or more star gift is pinned to the top of the list
 */
export async function togglePinnedStarGifts(client: ITelegramClient, params: {
    /** One or more gifts to pin */
    gifts: MaybeArray<InputStarGift>;
    /** Peer where the gift is sent */
    peer: InputPeerLike;
}): Promise<void> {
    const gifts = await parallelMap(Array.isArray(params.gifts) ? params.gifts : [params.gifts], it => _normalizeInputStarGift(client, it));
    const res = await client.call({
        _: 'payments.toggleStarGiftsPinnedToTop',
        stargift: gifts,
        peer: await resolvePeer(client, params.peer),
    });
    assertTrue('payments.toggleStarGiftsPinnedToTop', res);
}

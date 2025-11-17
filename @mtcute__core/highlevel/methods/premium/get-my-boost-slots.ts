import type { ITelegramClient } from "../../client.types.ts";
import { PeersIndex } from "../../types/index.ts";
import { BoostSlot } from "../../types/premium/boost-slot.ts";
/**
 * Get boost slots information of the current user.
 *
 * Includes information about the currently boosted channels,
 * as well as the slots that can be used to boost other channels.
 */
export async function getMyBoostSlots(client: ITelegramClient): Promise<BoostSlot[]> {
    const res = await client.call({
        _: 'premium.getMyBoosts',
    });
    const peers = PeersIndex.from(res);
    return res.myBoosts.map(it => new BoostSlot(it, peers));
}

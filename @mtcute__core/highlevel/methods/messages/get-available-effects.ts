import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import { LongMap } from "../../../utils/long-utils.ts";
import { assertTypeIsNot } from "../../../utils/type-assertions.ts";
import { MessageEffect } from "../../types/index.ts";
// @available=user
/**
 * Get a list of available message effects
 */
export async function getAvailableMessageEffects(client: ITelegramClient): Promise<MessageEffect[]> {
    const res = await client.call({
        _: 'messages.getAvailableEffects',
        hash: 0,
    });
    assertTypeIsNot('getAvailableMessageEffects', res, 'messages.availableEffectsNotModified');
    const documentsMap = new LongMap<tl.RawDocument>();
    for (const doc of res.documents) {
        if (doc._ !== 'document')
            continue;
        documentsMap.set(doc.id, doc);
    }
    return res.effects.map(effect => new MessageEffect(effect, documentsMap));
}

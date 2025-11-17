import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import { TakeoutSession } from "../../types/index.ts";
/**
 * Create a new takeout session
 *
 * @param params  Takeout session parameters
 */
export async function initTakeoutSession(client: ITelegramClient, params: Omit<tl.account.RawInitTakeoutSessionRequest, '_'>): Promise<TakeoutSession> {
    return new TakeoutSession(client, await client.call({
        _: 'account.initTakeoutSession',
        ...params,
    }));
}

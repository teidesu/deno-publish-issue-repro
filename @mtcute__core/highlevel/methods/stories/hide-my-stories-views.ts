import type { ITelegramClient } from "../../client.types.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { hasValueAtKey } from "../../../utils/type-assertions.ts";
import { StoriesStealthMode } from "../../types/stories/stealth-mode.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
/**
 * Hide own stories views (activate so called "stealth mode")
 *
 * Currently has a cooldown of 1 hour, and throws FLOOD_WAIT error if it is on cooldown.
 */
export async function hideMyStoriesViews(client: ITelegramClient, params?: {
    /**
     * Whether to hide views from the last 5 minutes
     *
     * @default  true
     */
    past?: boolean;
    /**
     * Whether to hide views for the next 25 minutes
     *
     * @default  true
     */
    future?: boolean;
}): Promise<StoriesStealthMode> {
    const { past = true, future = true } = params ?? {};
    const res = await client.call({
        _: 'stories.activateStealthMode',
        past,
        future,
    });
    assertIsUpdatesGroup('hideMyStoriesViews', res);
    client.handleClientUpdate(res, true);
    const upd = res.updates.find(hasValueAtKey('_', 'updateStoriesStealthMode'));
    if (!upd) {
        throw new MtTypeAssertionError('hideMyStoriesViews (@ res.updates[*])', 'updateStoriesStealthMode', 'none');
    }
    return new StoriesStealthMode(upd.stealthMode);
}

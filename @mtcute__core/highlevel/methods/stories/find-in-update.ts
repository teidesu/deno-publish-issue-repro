import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { assertTypeIs, hasValueAtKey } from "../../../utils/type-assertions.ts";
import { PeersIndex, Story } from "../../types/index.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
/** @internal */
export function _findStoryInUpdate(client: ITelegramClient, res: tl.TypeUpdates): Story {
    assertIsUpdatesGroup('_findStoryInUpdate', res);
    client.handleClientUpdate(res, true);
    const peers = PeersIndex.from(res);
    const updateStory = res.updates.find(hasValueAtKey('_', 'updateStory'));
    if (!updateStory) {
        throw new MtTypeAssertionError('_findStoryInUpdate (@ .updates[*])', 'updateStory', 'none');
    }
    assertTypeIs('updateStory.story', updateStory.story, 'storyItem');
    return new Story(updateStory.story, peers);
}

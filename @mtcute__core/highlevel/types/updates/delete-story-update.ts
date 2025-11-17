import type { tl } from '@mtcute/tl';
import type { Peer, PeersIndex } from "../../types/peers/index.ts";
import { parsePeer } from "../../types/peers/index.ts";
import { makeInspectable } from "../../utils/index.ts";
import { memoizeGetters } from "../../utils/memoize.ts";
/**
 * A story was deleted
 */
export class DeleteStoryUpdate {
    constructor(readonly raw: tl.RawUpdateStory, readonly _peers: PeersIndex) { }
    /**
     * Peer that owns these stories.
     */
    get peer(): Peer {
        return parsePeer(this.raw.peer, this._peers);
    }
    /**
     * ID of the deleted story
     */
    get storyId(): number {
        return this.raw.story.id;
    }
}
memoizeGetters(DeleteStoryUpdate, ['peer']);
makeInspectable(DeleteStoryUpdate);

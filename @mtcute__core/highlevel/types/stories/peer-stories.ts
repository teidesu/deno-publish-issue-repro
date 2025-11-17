import type { tl } from '@mtcute/tl';
import type { Peer, PeersIndex } from "../peers/index.ts";
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { makeInspectable } from "../../utils/index.ts";
import { memoizeGetters } from "../../utils/memoize.ts";
import { parsePeer } from "../peers/index.ts";
import { Story } from "./story.ts";
export class PeerStories {
    constructor(readonly raw: tl.RawPeerStories, readonly _peers: PeersIndex) { }
    /**
     * Peer that owns these stories.
     */
    get peer(): Peer {
        return parsePeer(this.raw.peer, this._peers);
    }
    /**
     * ID of the last read story of this peer.
     */
    get maxReadId(): number {
        return this.raw.maxReadId ?? 0;
    }
    /**
     * List of peer stories.
     */
    get stories(): Story[] {
        return this.raw.stories.map((it) => {
            assertTypeIs('PeerStories#stories', it, 'storyItem');
            return new Story(it, this._peers);
        });
    }
}
memoizeGetters(PeerStories, ['peer', 'stories']);
makeInspectable(PeerStories);

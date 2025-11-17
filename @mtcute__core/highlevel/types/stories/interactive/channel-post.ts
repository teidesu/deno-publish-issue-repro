import type { tl } from '@mtcute/tl';
import type { PeersIndex } from "../../peers/peers-index.ts";
import { makeInspectable } from "../../../utils/index.ts";
import { memoizeGetters } from "../../../utils/memoize.ts";
import { Chat } from "../../peers/chat.ts";
import { StoryInteractiveArea } from "./base.ts";
/**
 * Interactive element containing a channel post
 */
export class StoryInteractiveChannelPost extends StoryInteractiveArea {
    readonly type = 'channel_post' as const;
    constructor(override readonly raw: tl.RawMediaAreaChannelPost, readonly _peers: PeersIndex) {
        super(raw);
    }
    /** Channel being mentioned */
    get chat(): Chat {
        return new Chat(this._peers.chat(this.raw.channelId));
    }
    /** ID of the message being mentioned */
    get messageId(): number {
        return this.raw.msgId;
    }
}
memoizeGetters(StoryInteractiveChannelPost, ['chat']);
makeInspectable(StoryInteractiveChannelPost);

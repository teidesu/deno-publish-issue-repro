import type { tl } from '@mtcute/tl';
import type { PeersIndex } from "../peers-index.ts";
import type { ChatAction } from "./actions.ts";
import { makeInspectable } from "../../../utils/index.ts";
import { memoizeGetters } from "../../../utils/memoize.ts";
import { User } from "../user.ts";
import { _actionFromTl } from "./actions.ts";
export * from "./actions.ts";
export type { ChatEventFilters, InputChatEventFilters } from "./filters.ts";
export class ChatEvent {
    constructor(readonly raw: tl.TypeChannelAdminLogEvent, readonly _peers: PeersIndex, readonly _chatId: number) { }
    /**
     * Event ID.
     *
     * Event IDs are generated in direct chronological order
     * (i.e. newer events have bigger event ID)
     */
    get id(): tl.Long {
        return this.raw.id;
    }
    /**
     * Date of the event
     */
    get date(): Date {
        return new Date(this.raw.date * 1000);
    }
    /**
     * Actor of the event
     */
    get actor(): User {
        return new User(this._peers.user(this.raw.userId));
    }
    get action(): ChatAction {
        return _actionFromTl(this.raw.action, this._peers, this._chatId);
    }
}
memoizeGetters(ChatEvent, ['actor', 'action']);
makeInspectable(ChatEvent);

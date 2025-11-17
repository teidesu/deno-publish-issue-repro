import type { tl } from '@mtcute/tl';
import type { TextWithEntities } from "../misc/entities.ts";
import type { Peer } from "./peer.ts";
import { makeInspectable } from "../../utils/inspectable.ts";
import { memoizeGetters } from "../../utils/memoize.ts";
import { parsePeer } from "./peer.ts";
import { PeersIndex } from "./peers-index.ts";
/**
 * Information about a chatlist
 */
export class ChatlistPreview {
    readonly peers: PeersIndex;
    constructor(readonly raw: tl.chatlists.TypeChatlistInvite) {
        this.peers = PeersIndex.from(raw);
    }
    /** Whether the current user has already joined this chatlist */
    get isJoined(): boolean {
        return this.raw._ === 'chatlists.chatlistInviteAlready';
    }
    /** If we joined the chatlist, ID of the folder representing it */
    get folderId(): number | null {
        return this.raw._ === 'chatlists.chatlistInviteAlready' ? this.raw.filterId : null;
    }
    /** Title of the chatlist (only available for non-joined chatlists) */
    get title(): TextWithEntities {
        return this.raw._ === 'chatlists.chatlistInvite' ? this.raw.title : { text: '', entities: [] };
    }
    /** Emoji representing an icon of the chatlist (may only be available for non-joined chatlists) */
    get emoji(): string | null {
        return this.raw._ === 'chatlists.chatlistInvite' ? this.raw.emoticon ?? null : null;
    }
    /** List of all chats contained in the chatlist */
    get chats(): Peer[] {
        let peers;
        if (this.raw._ === 'chatlists.chatlistInvite') {
            peers = this.raw.peers;
        }
        else {
            peers = [...this.raw.alreadyPeers, ...this.raw.missingPeers];
        }
        return peers.map(peer => parsePeer(peer, this.peers));
    }
}
memoizeGetters(ChatlistPreview, ['chats']);
makeInspectable(ChatlistPreview);

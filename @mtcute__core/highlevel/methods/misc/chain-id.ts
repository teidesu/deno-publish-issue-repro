import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import { getMarkedPeerId } from "../../../utils/peer-utils.ts";
/** @internal */
export function _getPeerChainId(client: ITelegramClient, peer: tl.TypeInputPeer, prefix = 'peer') {
    const id = peer._ === 'inputPeerSelf' ? client.storage.self.getCached()!.userId : getMarkedPeerId(peer);
    return `${prefix}:${id}`;
}

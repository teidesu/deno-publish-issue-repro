import type { tl } from '@mtcute/tl';
import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { assertTypeIs, isPresent } from "../../../utils/type-assertions.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
import { resolvePeerMany } from "../users/resolve-peer-many.ts";
import { getChatlistPreview } from "./get-chatlist-preview.ts";
/**
 * Join a chatlist by its link
 *
 * @param link  Invite link to the chatlist
 * @param params  Additional parameters
 * @returns  Folder representing the chatlist
 */
export async function joinChatlist(client: ITelegramClient, link: string, params?: {
    /** Chats to join from the chatlist (all by default) */
    peers?: MaybeArray<InputPeerLike>;
}): Promise<tl.RawDialogFilterChatlist> {
    let peers: tl.TypeInputPeer[];
    if (params?.peers) {
        const inputs = Array.isArray(params.peers) ? params.peers : [params.peers];
        const all = await resolvePeerMany(client, inputs);
        peers = all.filter(isPresent);
    }
    else {
        const preview = await getChatlistPreview(client, link);
        peers = preview.chats.filter(it => !(it.type === 'chat' && it.isBanned)).map(it => it.inputPeer);
    }
    const res = await client.call({
        _: 'chatlists.joinChatlistInvite',
        slug: link,
        peers,
    });
    assertIsUpdatesGroup('joinChatlist', res);
    client.handleClientUpdate(res);
    const filter = res.updates.find(it => it._ === 'updateDialogFilter') as tl.RawUpdateDialogFilter;
    if (!filter?.filter) {
        throw new MtTypeAssertionError('joinChatlist', 'updateDialogFilter', 'nothing');
    }
    assertTypeIs('joinChatlist', filter.filter, 'dialogFilterChatlist');
    return filter.filter;
}

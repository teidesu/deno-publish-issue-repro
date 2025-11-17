import type { MaybeArray } from "../../../types/utils.ts";
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { isPresent } from "../../../utils/type-assertions.ts";
import { resolvePeerMany } from "../users/resolve-peer-many.ts";
/**
 * Archive one or more chats
 *
 * @param chats  Chat ID(s), username(s), phone number(s), `"me"` or `"self"`
 */
export async function archiveChats(client: ITelegramClient, chats: MaybeArray<InputPeerLike>): Promise<void> {
    if (!Array.isArray(chats))
        chats = [chats];
    const resolvedPeers = await resolvePeerMany(client, chats);
    const updates = await client.call({
        _: 'folders.editPeerFolders',
        folderPeers: resolvedPeers.filter(isPresent).map(peer => ({
            _: 'inputFolderPeer',
            peer,
            folderId: 1,
        })),
    });
    client.handleClientUpdate(updates);
}

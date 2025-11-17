import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolvePeer } from "./resolve-peer.ts";
/**
 * Unblock a user
 *
 * @param id  User ID, username or phone number
 */
export async function unblockUser(client: ITelegramClient, id: InputPeerLike): Promise<void> {
    const r = await client.call({
        _: 'contacts.unblock',
        id: await resolvePeer(client, id),
    });
    assertTrue('contacts.unblock', r);
}

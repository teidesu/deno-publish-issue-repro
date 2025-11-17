import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolvePeer } from "./resolve-peer.ts";
/**
 * Block a user
 *
 * @param id  User ID, username or phone number
 */
export async function blockUser(client: ITelegramClient, id: InputPeerLike): Promise<void> {
    const r = await client.call({
        _: 'contacts.block',
        id: await resolvePeer(client, id),
    });
    assertTrue('contacts.block', r);
}

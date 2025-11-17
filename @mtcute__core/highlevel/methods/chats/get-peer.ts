import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike, Peer } from "../../types/index.ts";
import { isInputPeerUser } from "../../utils/peer-utils.ts";
import { resolvePeer } from "../users/resolve-peer.ts";
import { getChat } from "./get-chat.ts";
import { getUser } from "./get-user.ts";
/** Shorthand for {@link getChat} and {@link getUser} depending on the type of the peer */
export async function getPeer(client: ITelegramClient, peer: InputPeerLike): Promise<Peer> {
    const resolved = await resolvePeer(client, peer);
    if (isInputPeerUser(resolved)) {
        return getUser(client, resolved);
    }
    return getChat(client, resolved);
}

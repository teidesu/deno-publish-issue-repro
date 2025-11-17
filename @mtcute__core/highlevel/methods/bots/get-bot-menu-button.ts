import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { resolveUser } from "../users/resolve-peer.ts";
/**
 * Fetches the menu button set for the given user.
 */
export async function getBotMenuButton(client: ITelegramClient, user: InputPeerLike): Promise<tl.TypeBotMenuButton> {
    return client.call({
        _: 'bots.getBotMenuButton',
        userId: await resolveUser(client, user),
    });
}

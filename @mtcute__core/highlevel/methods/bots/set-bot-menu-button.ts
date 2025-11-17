import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike } from "../../types/index.ts";
import { assertTrue } from "../../../utils/type-assertions.ts";
import { resolveUser } from "../users/resolve-peer.ts";
/**
 * Sets a menu button for the given user.
 */
export async function setBotMenuButton(client: ITelegramClient, user: InputPeerLike, button: tl.TypeBotMenuButton): Promise<void> {
    const r = await client.call({
        _: 'bots.setBotMenuButton',
        userId: await resolveUser(client, user),
        button,
    });
    assertTrue('bots.setBotMenuButton', r);
}

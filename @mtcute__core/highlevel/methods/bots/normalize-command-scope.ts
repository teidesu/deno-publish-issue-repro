import type { ITelegramClient } from "../../client.types.ts";
import type { BotCommands } from "../../types/index.ts";
import { tl } from '@mtcute/tl';
import { assertNever } from "../../../types/utils.ts";
import { resolvePeer, resolveUser } from "../users/resolve-peer.ts";
/** @internal */
export async function _normalizeCommandScope(client: ITelegramClient, scope: tl.TypeBotCommandScope | BotCommands.IntermediateScope): Promise<tl.TypeBotCommandScope> {
    if (tl.isAnyBotCommandScope(scope))
        return scope;
    switch (scope.type) {
        case 'peer':
        case 'peer_admins': {
            const peer = await resolvePeer(client, scope.peer);
            return {
                _: scope.type === 'peer' ? 'botCommandScopePeer' : 'botCommandScopePeerAdmins',
                peer,
            };
        }
        case 'member': {
            const user = await resolveUser(client, scope.user);
            const chat = await resolvePeer(client, scope.chat);
            return {
                _: 'botCommandScopePeerUser',
                peer: chat,
                userId: user,
            };
        }
        default:
            assertNever(scope);
    }
}

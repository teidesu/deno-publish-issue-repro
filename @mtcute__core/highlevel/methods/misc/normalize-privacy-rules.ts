import type { tl } from '@mtcute/tl';
import type { ITelegramClient } from "../../client.types.ts";
import type { InputPrivacyRule } from "../../types/index.ts";
import { isPresent } from "../../../utils/type-assertions.ts";
import { toInputUser } from "../../utils/index.ts";
import { resolvePeerMany } from "../users/resolve-peer-many.ts";
/**
 * Normalize {@link InputPrivacyRule}[] to `tl.TypeInputPrivacyRule`,
 * resolving the peers if needed.
 */
export async function _normalizePrivacyRules(client: ITelegramClient, rules: InputPrivacyRule[]): Promise<tl.TypeInputPrivacyRule[]> {
    const res: tl.TypeInputPrivacyRule[] = [];
    for (const rule of rules) {
        if ('_' in rule) {
            res.push(rule);
            continue;
        }
        if ('users' in rule) {
            const users = await resolvePeerMany(client, rule.users, toInputUser);
            res.push({
                _: rule.allow ? 'inputPrivacyValueAllowUsers' : 'inputPrivacyValueDisallowUsers',
                users,
            });
            continue;
        }
        if ('chats' in rule) {
            const chats = await resolvePeerMany(client, rule.chats);
            res.push({
                _: rule.allow ? 'inputPrivacyValueAllowChatParticipants' : 'inputPrivacyValueDisallowChatParticipants',
                chats: chats.filter(isPresent).map((peer) => {
                    if ('channelId' in peer)
                        return peer.channelId;
                    if ('chatId' in peer)
                        return peer.chatId;
                    throw new Error('UNREACHABLE');
                }),
            });
            continue;
        }
    }
    return res;
}

import type { tl } from '@mtcute/tl';
import type { InputPeerLike } from "../../peers/peer.ts";
export interface InputPrivacyRuleUsers {
    allow: boolean;
    users: InputPeerLike[];
}
export interface InputPrivacyRuleChatParticipants {
    allow: boolean;
    chats: InputPeerLike[];
}
export type InputPrivacyRule = InputPrivacyRuleChatParticipants | InputPrivacyRuleUsers | tl.TypeInputPrivacyRule;

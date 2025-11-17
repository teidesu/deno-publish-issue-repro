import type { ITelegramClient } from "../../client.types.ts";
import { BusinessChatLink } from "../../types/premium/business-chat-link.ts";
// @available=user
/**
 * Get current user's business chat links
 */
export async function getBusinessChatLinks(client: ITelegramClient): Promise<BusinessChatLink[]> {
    const res = await client.call({ _: 'account.getBusinessChatLinks' });
    return res.links.map(x => new BusinessChatLink(x));
}

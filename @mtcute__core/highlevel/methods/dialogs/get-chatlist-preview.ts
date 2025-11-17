import type { ITelegramClient } from "../../client.types.ts";
import { ChatlistPreview } from "../../types/index.ts";
/**
 * Get a preview of a chatlist by its invite link
 *
 * @param link  Invite link
 */
export async function getChatlistPreview(client: ITelegramClient, link: string): Promise<ChatlistPreview> {
    const res = await client.call({
        _: 'chatlists.checkChatlistInvite',
        slug: link,
    });
    return new ChatlistPreview(res);
}

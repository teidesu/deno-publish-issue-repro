import type { ITelegramClient } from "../../client.types.ts";
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { PeersIndex } from "../../types/peers/peers-index.ts";
import { BusinessConnection } from "../../types/premium/business-connection.ts";
import { assertIsUpdatesGroup } from "../../updates/utils.ts";
// @available=bot
/**
 * Get information about the connection of the bot with a business account
 *
 * @param connectionId  ID of the business connection
 */
export async function getBusinessConnection(client: ITelegramClient, connectionId: string): Promise<BusinessConnection> {
    const res = await client.call({
        _: 'account.getBotBusinessConnection',
        connectionId,
    });
    assertIsUpdatesGroup('account.getBotBusinessConnection', res);
    client.handleClientUpdate(res);
    assertTypeIs('account.getBotBusinessConnection', res.updates[0], 'updateBotBusinessConnect');
    const peers = PeersIndex.from(res);
    return new BusinessConnection(res.updates[0].connection, peers);
}

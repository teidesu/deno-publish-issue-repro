import type { ITelegramClient } from "../../client.types.ts";
import type { User } from "../../types/peers/user.ts";
import { _onAuthorization } from "./utils.ts";
/**
 * Authorize a bot using its token issued by [@BotFather](//t.me/BotFather)
 *
 * @param token  Bot token issued by BotFather
 * @returns  Bot's {@link User} object
 * @throws BadRequestError  In case the bot token is invalid
 */
export async function signInBot(client: ITelegramClient, token: string): Promise<User> {
    const { id, hash } = await client.getApiCredentials();
    const res = await client.call({
        _: 'auth.importBotAuthorization',
        flags: 0,
        apiId: id,
        apiHash: hash,
        botAuthToken: token,
    });
    return _onAuthorization(client, res);
}

import type { ITelegramClient } from "../../client.types.ts";
import { assertTypeIs } from "../../../utils/type-assertions.ts";
import { User } from "../../types/index.ts";
/**
 * Get currently authorized user's full information
 */
export function getMe(client: ITelegramClient): Promise<User> {
    return client
        .call({
        _: 'users.getUsers',
        id: [
            {
                _: 'inputUserSelf',
            },
        ],
    })
        .then(async ([user]) => {
        assertTypeIs('getMe (@ users.getUsers)', user, 'user');
        await client.storage.self.storeFrom(user);
        return new User(user);
    });
}

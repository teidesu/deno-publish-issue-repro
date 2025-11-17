import type { ITelegramClient } from "../../client.types.ts";
import { User } from "../../types/index.ts";
/**
 * Update your profile details.
 *
 * Only pass fields that you want to change.
 *
 * @param params
 */
export async function updateProfile(client: ITelegramClient, params: {
    /**
     * New first name
     */
    firstName?: string;
    /**
     * New last name. Pass `''` (empty string) to remove it
     */
    lastName?: string;
    /**
     * New bio (max 70 chars). Pass `''` (empty string) to remove it
     */
    bio?: string;
}): Promise<User> {
    const res = await client.call({
        _: 'account.updateProfile',
        firstName: params.firstName,
        lastName: params.lastName,
        about: params.bio,
    });
    return new User(res);
}

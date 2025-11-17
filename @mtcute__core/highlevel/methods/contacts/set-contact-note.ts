import type { ITelegramClient } from "../../client.types.ts";
import type { InputPeerLike, InputText } from "../../types/index.ts";
import { assertTrue } from "../../../utils/index.ts";
import { resolveUser } from "../../methods.ts";
import { inputTextToTl } from "../../types/index.ts";
/**
 * Set a note for a contact
 *
 * @param userId  ID of the user to set the note for
 * @param note  Note text
 */
export async function setContactNote(client: ITelegramClient, userId: InputPeerLike, note: InputText): Promise<void> {
    const peer = await resolveUser(client, userId);
    const r = await client.call({
        _: 'contacts.updateContactNote',
        id: peer,
        note: inputTextToTl(note),
    });
    assertTrue('contacts.updateContactNote', r);
}

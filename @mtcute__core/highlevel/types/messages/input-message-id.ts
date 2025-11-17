import type { InputPeerLike } from "../peers/index.ts";
import type { Message } from "./message.ts";
/**
 * Parameters for methods that accept a message
 *
 * Either a message object (in `message` field), or a chat ID and a message ID
 */
export type InputMessageId = {
    chatId: InputPeerLike;
    message: number;
} | {
    message: Message;
};
/** Remove {@link InputMessageId} type from the given type */
export type OmitInputMessageId<T> = Omit<T, 'chatId' | 'message'>;
/** @internal */
export function normalizeInputMessageId(id: InputMessageId): {
    chatId: InputPeerLike;
    message: number;
} {
    if ('chatId' in id)
        return id;
    return { chatId: id.message.chat.inputPeer, message: id.message.id };
}

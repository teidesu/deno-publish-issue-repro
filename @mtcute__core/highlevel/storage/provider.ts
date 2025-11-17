import type { IMtStorageProvider } from "../../storage/provider.ts";
import type { IPeersRepository } from "./repository/peers.ts";
import type { IReferenceMessagesRepository } from "./repository/ref-messages.ts";
export interface ITelegramStorageProvider extends IMtStorageProvider {
    readonly peers: IPeersRepository;
    readonly refMessages: IReferenceMessagesRepository;
}

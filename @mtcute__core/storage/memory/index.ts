import type { ITelegramStorageProvider } from "../../highlevel/storage/provider.ts";
import type { IMtStorageProvider } from "../provider.ts";
import { MemoryStorageDriver } from "./driver.ts";
import { MemoryAuthKeysRepository } from "./repository/auth-keys.ts";
import { MemoryKeyValueRepository } from "./repository/kv.ts";
import { MemoryPeersRepository } from "./repository/peers.ts";
import { MemoryRefMessagesRepository } from "./repository/ref-messages.ts";
export { MemoryStorageDriver } from "./driver.ts";
export { MemoryAuthKeysRepository } from "./repository/auth-keys.ts";
export { MemoryKeyValueRepository } from "./repository/kv.ts";
export { MemoryPeersRepository } from "./repository/peers.ts";
export { MemoryRefMessagesRepository } from "./repository/ref-messages.ts";
/**
 * In-memory storage driver implementation for mtcute.
 *
 * This storage is **not persistent**, meaning that all data
 * **will** be lost on restart. Only use this storage for testing,
 * or if you know exactly what you're doing.
 */
export class MemoryStorage implements IMtStorageProvider, ITelegramStorageProvider {
    readonly driver: MemoryStorageDriver = new MemoryStorageDriver();
    readonly kv: MemoryKeyValueRepository = new MemoryKeyValueRepository(this.driver);
    readonly authKeys: MemoryAuthKeysRepository = new MemoryAuthKeysRepository(this.driver);
    readonly peers: MemoryPeersRepository = new MemoryPeersRepository(this.driver);
    readonly refMessages: MemoryRefMessagesRepository = new MemoryRefMessagesRepository(this.driver);
}

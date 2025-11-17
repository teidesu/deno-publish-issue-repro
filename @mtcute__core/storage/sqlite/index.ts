import type { ITelegramStorageProvider } from "../../highlevel/storage/provider.ts";
import type { IMtStorageProvider } from "../provider.ts";
import { BaseSqliteStorageDriver } from "./driver.ts";
import { SqliteAuthKeysRepository } from "./repository/auth-keys.ts";
import { SqliteKeyValueRepository } from "./repository/kv.ts";
import { SqlitePeersRepository } from "./repository/peers.ts";
import { SqliteRefMessagesRepository } from "./repository/ref-messages.ts";
export { BaseSqliteStorageDriver };
export * from "./types.ts";
export class BaseSqliteStorage implements IMtStorageProvider, ITelegramStorageProvider {
    readonly authKeys: SqliteAuthKeysRepository;
    readonly kv: SqliteKeyValueRepository;
    readonly refMessages: SqliteRefMessagesRepository;
    readonly peers: SqlitePeersRepository;
    constructor(readonly driver: BaseSqliteStorageDriver) {
        this.authKeys = new SqliteAuthKeysRepository(this.driver);
        this.kv = new SqliteKeyValueRepository(this.driver);
        this.refMessages = new SqliteRefMessagesRepository(this.driver);
        this.peers = new SqlitePeersRepository(this.driver);
    }
}

import type { IMtStorageProvider } from '@mtcute/core';
import { IdbStorageDriver } from "./driver.ts";
import { IdbAuthKeysRepository } from "./repository/auth-keys.ts";
import { IdbKvRepository } from "./repository/kv.ts";
import { IdbPeersRepository } from "./repository/peers.ts";
import { IdbRefMsgRepository } from "./repository/ref-messages.ts";
export { IdbStorageDriver } from "./driver.ts";
/**
 * mtcute storage that uses IndexedDB as a backend.
 *
 * This storage is the default one for browsers, and is generally
 * recommended over local storage based one.
 */
export class IdbStorage implements IMtStorageProvider {
    readonly driver: IdbStorageDriver;
    readonly kv: IdbKvRepository;
    readonly authKeys: IdbAuthKeysRepository;
    readonly peers: IdbPeersRepository;
    readonly refMessages: IdbRefMsgRepository;
    constructor(readonly dbName: string) {
        this.driver = new IdbStorageDriver(this.dbName);
        this.kv = new IdbKvRepository(this.driver);
        this.authKeys = new IdbAuthKeysRepository(this.driver);
        this.peers = new IdbPeersRepository(this.driver);
        this.refMessages = new IdbRefMsgRepository(this.driver);
    }
}

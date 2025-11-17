import type { SqliteStorageDriverOptions } from "./driver.ts";
import { BaseSqliteStorage } from '@mtcute/core';
import { SqliteStorageDriver } from "./driver.ts";
export { SqliteStorageDriver } from "./driver.ts";
export class SqliteStorage extends BaseSqliteStorage {
    constructor(readonly filename = ':memory:', readonly params?: SqliteStorageDriverOptions | undefined) {
        super(new SqliteStorageDriver(filename, params));
    }
}

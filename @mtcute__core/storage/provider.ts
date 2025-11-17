import type { IStorageDriver } from "./driver.ts";
import type { IAuthKeysRepository } from "./repository/auth-keys.ts";
import type { IKeyValueRepository } from "./repository/key-value.ts";
export type IStorageProvider<T> = T & {
    readonly driver: IStorageDriver;
};
export type IMtStorageProvider = IStorageProvider<{
    readonly kv: IKeyValueRepository;
    readonly authKeys: IAuthKeysRepository;
}>;

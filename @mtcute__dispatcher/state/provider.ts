import type { IStorageProvider } from '@mtcute/core';
import type { IStateRepository } from "./repository.ts";
export type IStateStorageProvider = IStorageProvider<{
    state: IStateRepository;
}>;

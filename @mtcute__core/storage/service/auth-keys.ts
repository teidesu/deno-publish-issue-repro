import type { IAuthKeysRepository } from "../repository/auth-keys.ts";
import type { ServiceOptions } from "./base.ts";
import type { FutureSaltsService } from "./future-salts.ts";
import { BaseService } from "./base.ts";
export class AuthKeysService extends BaseService {
    constructor(readonly _keys: IAuthKeysRepository, readonly _salts: FutureSaltsService, opts: ServiceOptions) {
        super(opts);
    }
    async deleteByDc(dc: number): Promise<void> {
        await this._keys.deleteByDc(dc);
        await this._salts.delete(dc);
    }
}

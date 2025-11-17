import type { PublicPart } from "../../types/utils.ts";
import type { AppConfigManager } from "../managers/app-config-manager.ts";
import type { WorkerInvoker } from "./invoker.ts";
export class AppConfigManagerProxy implements PublicPart<AppConfigManager> {
    readonly get: AppConfigManager['get'];
    readonly getField: AppConfigManager['getField'];
    constructor(readonly invoker: WorkerInvoker) {
        const bind = invoker.makeBinder<AppConfigManager>('app-config');
        this.get = bind('get');
        this.getField = bind('getField');
    }
}

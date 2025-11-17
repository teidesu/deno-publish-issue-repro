import type { RpcCallMiddleware } from "../network-manager.ts";
import type { FloodWaiterOptions } from "./flood-waiter.ts";
import type { InternalErrorsHandlerOptions } from "./internal-errors.ts";
import { floodWaiter } from "./flood-waiter.ts";
import { internalErrorsHandler } from "./internal-errors.ts";
export interface BasicMiddlewaresOptions {
    floodWaiter?: FloodWaiterOptions;
    internalErrors?: InternalErrorsHandlerOptions;
}
export function basic(options?: BasicMiddlewaresOptions): RpcCallMiddleware[] {
    return [floodWaiter(options?.floodWaiter ?? {}), internalErrorsHandler(options?.internalErrors ?? {})];
}

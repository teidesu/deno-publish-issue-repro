import type { ITelegramClient } from "../../client.types.ts";
import type { FileDownloadLocation, FileDownloadParameters } from "../../types/index.ts";
import { FileLocation } from "../../types/index.ts";
import { downloadAsIterable } from "./download-iterable.ts";
/**
 * Download a file and return it as a `@fuman/io` stream,
 * streaming file contents.
 *
 * @param params  File download parameters
 */
export function downloadAsStream(client: ITelegramClient, location: FileDownloadLocation, params?: FileDownloadParameters): ReadableStream<Uint8Array> {
    if (location instanceof FileLocation && ArrayBuffer.isView(location.location)) {
        const buf = location.location;
        return new ReadableStream({
            start(controller) {
                controller.enqueue(buf);
                controller.close();
            },
        });
    }
    const cancel = new AbortController();
    if (params?.abortSignal) {
        params?.abortSignal.addEventListener('abort', () => {
            cancel.abort();
        });
    }
    return new ReadableStream<Uint8Array>({
        start(controller) {
            (async () => {
                for await (const chunk of downloadAsIterable(client, location, params)) {
                    controller.enqueue(chunk);
                }
                controller.close();
            })().catch(e => controller.error(e));
        },
        cancel() {
            cancel.abort();
        },
    });
}

import type { tl } from '@mtcute/tl';
import { Audio } from "./audio.ts";
import { Document } from "./document.ts";
import { Sticker } from "./sticker.ts";
import { Video } from "./video.ts";
import { Voice } from "./voice.ts";
export type ParsedDocument = Sticker | Voice | Audio | Video | Document;
/** @internal */
export function parseSticker(doc: tl.RawDocument): Sticker | undefined {
    const stickerAttr = doc.attributes.find(a => a._ === 'documentAttributeSticker' || a._ === 'documentAttributeCustomEmoji');
    if (stickerAttr) {
        const sz = doc.attributes.find(it => it._ === 'documentAttributeImageSize' || it._ === 'documentAttributeVideo')!;
        return new Sticker(doc, stickerAttr, sz);
    }
}
/** @internal */
export function parseDocument(doc: tl.RawDocument, media?: tl.RawMessageMediaDocument): ParsedDocument {
    const sticker = parseSticker(doc);
    if (sticker)
        return sticker;
    for (const attr of doc.attributes) {
        switch (attr._) {
            case 'documentAttributeAudio':
                if (attr.voice) {
                    return new Voice(doc, attr);
                }
                return new Audio(doc, attr);
            case 'documentAttributeVideo':
                return new Video(doc, attr, media);
            case 'documentAttributeImageSize':
                // legacy gif
                if (doc.mimeType === 'image/gif') {
                    return new Video(doc, attr, media);
                }
        }
    }
    return new Document(doc);
}

import type { TlEntry } from "./types.ts";
import crc32 from 'crc/calculators/crc32';
import { writeTlEntryToString } from "./stringify.ts";
/**
 * Computes the constructor id for a given TL entry.
 *
 * @param entry  TL entry
 */
export function computeConstructorIdFromEntry(entry: TlEntry): number {
    const str = writeTlEntryToString(entry, true);
    return crc32(new TextEncoder().encode(str)) >>> 0;
}

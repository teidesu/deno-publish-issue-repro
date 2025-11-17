import type { IExtendedCryptoProvider } from "./crypto.ts";
export function getDefaultCryptoProviderImpl(nodeCrypto: any, NodeCryptoProvider: any): IExtendedCryptoProvider {
    // @ts-expect-error - any
    return new (class extends NodeCryptoProvider implements IExtendedCryptoProvider {
        createHash(algorithm: 'md5' | 'sha512') {
            const hasher = nodeCrypto.createHash(algorithm);
            return {
                update(data: Uint8Array) {
                    hasher.update(data);
                },
                digest() {
                    return hasher.digest() as unknown as Uint8Array;
                },
            };
        }
    })();
}

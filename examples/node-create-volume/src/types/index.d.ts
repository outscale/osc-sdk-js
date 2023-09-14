// Note: this should not be needed in a close future (2022/05) as this should be integrated in node types.
declare module "crypto" {
    namespace webcrypto {
      const subtle: SubtleCrypto;
      function getRandomValues<T extends ArrayBufferView | null>(array: T): T;
      function randomUUID(): string;
    }
  }
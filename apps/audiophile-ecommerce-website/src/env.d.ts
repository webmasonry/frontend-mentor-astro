import type { Runtime } from "@astrojs/cloudflare";

declare namespace App {
  interface Locals extends Runtime<Env> {}
}

interface ImportMetaEnv {
  readonly CI: boolean;
  readonly DOMAIN: string;
}

// biome-ignore lint/correctness/noUnusedVariables: ImportMetaEnv is used for type declarations only
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

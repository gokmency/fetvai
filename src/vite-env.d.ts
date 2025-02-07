/// <reference types="vite/client" />

declare const __GEMINI_API_KEY__: string;

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

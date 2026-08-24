/// <reference types="vite/client" />

interface ImportMetaEnv {
  // unused for now
  readonly VITE_API_GATEWAY_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

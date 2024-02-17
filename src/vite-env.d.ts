/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXRATES_URL: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHCMS_CONTENT_API_URL: string;
  readonly VITE_GRAPHCMS_API_ACCESS_TOKEN: String;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
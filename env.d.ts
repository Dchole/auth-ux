declare namespace NodeJS {
  interface ProcessEnv {
    CRYPTO_SECRET: string;
    MONGODB_URI: string;
  }
}

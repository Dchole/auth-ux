declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    REFRESH_SECRET: string;
    MONGODB_URI: string;
    MONGODB_LOCAL: string;
  }
}

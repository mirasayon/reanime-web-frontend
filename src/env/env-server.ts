// env/server.ts
import { validateEnvironment } from "safest-env";
import { envVarConfig } from "../configs/env-config";

const _env = validateEnvironment(envVarConfig);

export const envServer = Object.freeze({
    NODE_ENV: _env.NODE_ENV,
    isProd: _env.NODE_ENV === "production",
    isDev: _env.NODE_ENV === "development",
    isTest: _env.NODE_ENV === "test",

    userServiceApiKey: _env.REANIME_USER_SERVICE_API_KEY,
    kodikApiToken: _env.KODIK_API_TOKEN,
});

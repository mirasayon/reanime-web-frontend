"use server";
import { validateEnvironment } from "safest-env";
import { envVarConfig } from "./env-config";

/** Load Environment variables */
export async function nextLoadEnvSSR() {
    const _env = validateEnvironment(envVarConfig);
    const ProcessedEnv = new (class EnvConfigClass {
        NODE_ENV = _env.NODE_ENV;
        /** Working mode */
        is_prod = _env.NODE_ENV === "production";
        is_dev = _env.NODE_ENV === "development";
        is_test = _env.NODE_ENV === "test";
        user_service_api_key = _env.REANIME_USER_SERVICE_API_KEY;
        kodikApiToken = _env.KODIK_API_TOKEN;
    })();
    return ProcessedEnv;
}

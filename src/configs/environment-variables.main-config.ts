"use server";
import { validateEnvironment } from "safest-env";
import { envVarConfig } from "./env-config";

/** Load Environment variables */
export async function loadEnvFile() {
    const _env = validateEnvironment(envVarConfig);
    const ProcessedEnv = new (class EnvConfigClass {
        /** google analytics id */
        gaid = _env.GOOGLE_ANALYTICS_ID;
        /** google tag manager id */
        gtm_id = _env.GOOGLE_TAG_MANAGER_ID;

        NODE_ENV = _env.NODE_ENV;
        /** Working mode */
        mode = {
            prod: this.NODE_ENV === "production",
            dev: this.NODE_ENV === "development",
            test: this.NODE_ENV === "test",
        };
        /** For avatars and covers */
        media_service = {
            /** Current */
            url: _env.REANIME_MEDIA_SERVICE_URL,
        };
        user_service = {
            api_key: _env.REANIME_USER_SERVICE_API_KEY,
            /** Current */
            url: _env.REANIME_USER_SERVICE_URL,
        };
        kodikApiToken = _env.KODIK_API_TOKEN;
    })();
    return ProcessedEnv;
}


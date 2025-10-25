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
        is_prod = this.NODE_ENV === "production";
        is_dev = this.NODE_ENV === "development";
        is_test = this.NODE_ENV === "test";
        user_service = {
            api_key: _env.REANIME_USER_SERVICE_API_KEY,
            /** Current Url */
            url: this.is_prod ? "https://user-service.reanime.art" : this.is_test ? "http://192.168.0.105:2642" : "http://192.168.0.105:3642",
        };
        kodikApiToken = _env.KODIK_API_TOKEN;
    })();
    return ProcessedEnv;
}

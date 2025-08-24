"use server";
import { validateEnvironment, builtInSchemas as v } from "safest-env";
/** Load Environment variables */
export async function LoadConfig() {
    const _env = validateEnvironment({
        NODE_ENV: v.enum(["development", "test", "production"] as const),
        GOOGLE_ANALYTICS_ID: v.string(),
        GOOGLE_TAG_MANAGER_ID: v.string(),
        REANIME_RESOURCE_SERVICE_URL: v.url(),
        REANIME_RESOURCE_SERVICE_API_KEY: v.string(),
        REANIME_USER_SERVICE_URL: v.url(),
        REANIME_USER_SERVICE_API_KEY: v.string(),
        REANIME_MEDIA_SERVICE_URL: v.url(),
    });
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
        partners = {
            /** For avatars and covers */
            media_service: {
                /** Current */
                url: _env.REANIME_MEDIA_SERVICE_URL,
            },
            user_service: {
                api_key: _env.REANIME_USER_SERVICE_API_KEY,
                /** Current */
                url: _env.REANIME_USER_SERVICE_URL,
            },
            resource_service: {
                api_key: _env.REANIME_RESOURCE_SERVICE_API_KEY,
                /** Current */
                url: _env.REANIME_RESOURCE_SERVICE_URL,
            },
        };
    })();
    return ProcessedEnv;
}

"use server";
import { checkProcessEnv } from "./checker-env.utils";
import { required_env_variables, type TypeRequiredEnvVarbs } from "./needed-env-varbs.constants";
/** Load Environment variables */
export async function LoadConfig() {
    const _env = await checkProcessEnv<TypeRequiredEnvVarbs>(required_env_variables);
    const ProcessedEnv = new (class EnvConfigClass {
        /** google analytics id */
        gaid = _env.GOOGLE_ANALYTICS_ID;
        /** google tag manager id */
        gtm_id = _env.GOOGLE_TAG_MANAGER_ID;

        NODE_ENV = _env.NODE_ENV as "development" | "production" | "test";
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

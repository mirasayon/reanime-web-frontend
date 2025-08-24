import { builtInSchemas as v } from "safest-env";
export const envVarConfig = {
    NODE_ENV: v.enum(["development", "test", "production"] as const),
    GOOGLE_ANALYTICS_ID: v.string(),
    GOOGLE_TAG_MANAGER_ID: v.string(),
    REANIME_RESOURCE_SERVICE_URL: v.url(),
    REANIME_RESOURCE_SERVICE_API_KEY: v.string(),
    REANIME_USER_SERVICE_URL: v.url(),
    REANIME_USER_SERVICE_API_KEY: v.string(),
    REANIME_MEDIA_SERVICE_URL: v.url(),
};

import { builtInSchemas as v } from "safest-env";
export const envVarConfig = {
    NODE_ENV: v.enum(["development", "test", "production"] as const),
    KODIK_API_TOKEN: v.string(),
    /** Analytics  */
    GOOGLE_ANALYTICS_ID: v.string().optional(),
    GOOGLE_TAG_MANAGER_ID: v.string().optional(),
    /** User Services */
    REANIME_USER_SERVICE_URL: v.url(),
    REANIME_USER_SERVICE_API_KEY: v.string(),
    REANIME_MEDIA_SERVICE_URL: v.url(),
} as const;


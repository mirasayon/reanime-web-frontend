import { builtInSchemas as v } from "safest-env";
export const envVarConfig = {
    NODE_ENV: v.enum(["development", "test", "production"] as const),
    KODIK_API_TOKEN: v.string(),
    REANIME_USER_SERVICE_API_KEY: v.string(),
} as const;

class EnvConfigClass {
    constructor(required_env_variables: string[]) {
        for (const eVar of required_env_variables) {
            if (!Object.hasOwn(process.env, eVar)) {
                // throw new Error(`Env var ${eVar} is required!`);
            }
            if (typeof process.env[eVar] !== "string") {
                // throw new Error(`Env var ${eVar} must be a string!`);
            }
            if (!["development", "test", "production"].includes(process.env.NODE_ENV!)) {
                // throw new Error(`Invalid NODE_ENV value: ${env.NODE_ENV}`);
            }
        }
    }
    gaid = process.env.GOOGLE_ANALYTICS_ID!;
    gtm_id = process.env.GOOGLE_TAG_MANAGER_ID!;
    NODE_ENV = process.env.NODE_ENV as "development" | "production" | "test";
    /** Working mode */
    mode = {
        prod: process.env.NODE_ENV === "production",
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
    };
    partners = {
        /** For avatars and covers */
        media_service: {
            url: {
                prod: process.env.REANIME_MEDIA_SERVICE_URL_PROD!,
                dev: process.env.REANIME_MEDIA_SERVICE_URL_DEV!,
                current: this.mode.prod ? process.env.REANIME_MEDIA_SERVICE_URL_PROD! : process.env.REANIME_MEDIA_SERVICE_URL_DEV!,
            },
        },
        user_service: {
            api_key: process.env.REANIME_USER_SERVICE_API_KEY!,
            url: {
                prod: process.env.REANIME_USER_SERVICE_URL_PROD!,
                dev: process.env.REANIME_USER_SERVICE_URL_DEV!,
                current: this.mode.prod ? process.env.REANIME_USER_SERVICE_URL_PROD! : process.env.REANIME_USER_SERVICE_URL_DEV!,
            },
        },
        resource_service: {
            api_key: process.env.REANIME_RESOURCE_SERVICE_API_KEY!,
            /**
             * Current
             */
            url: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_CURRENT!,
        },
    };
}

/** Environment variables */
export const EnvConfig = new EnvConfigClass([
    "NODE_ENV",
    "GOOGLE_ANALYTICS_ID",
    "GOOGLE_TAG_MANAGER_ID",
    "NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_CURRENT",
    "REANIME_RESOURCE_SERVICE_API_KEY",
    "REANIME_USER_SERVICE_URL_PROD",
    "REANIME_USER_SERVICE_API_KEY",
    "REANIME_USER_SERVICE_URL_DEV",
    "REANIME_MEDIA_SERVICE_URL_PROD",
    "REANIME_MEDIA_SERVICE_URL_DEV",
]);

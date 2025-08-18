const required_env_variables = [
    "NODE_ENV",
    "GOOGLE_ANALYTICS_ID",
    "GOOGLE_TAG_MANAGER_ID",
    "NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL",
    "REANIME_RESOURCE_SERVICE_API_KEY",
    "REANIME_USER_SERVICE_URL",
    "REANIME_USER_SERVICE_API_KEY",
    "REANIME_MEDIA_SERVICE_URL",
] as const;
type ReqEnv = {
    [key in (typeof required_env_variables)[number]]: string;
};
function check() {
    for (const eVar of required_env_variables) {
        if (!Object.hasOwn(process.env, eVar)) {
            throw new Error(`${eVar} is required in environment variables`);
        }
        if (!["development", "test", "production"].includes(process.env.NODE_ENV!)) {
            throw new Error(`Invalid NODE_ENV value: ${process.env.NODE_ENV}`);
        }
    }

    return process.env as ReqEnv;
}
// const _env = check();

/** Environment variables */
export const EnvConfig = new (class EnvConfigClass {
    /** google analytics id */
    gaid = process.env.GOOGLE_ANALYTICS_ID!;
    /** google tag manager id */
    gtm_id = process.env.GOOGLE_TAG_MANAGER_ID!;

    NODE_ENV = process.env.NODE_ENV as "development" | "production" | "test";
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
            url: process.env.REANIME_MEDIA_SERVICE_URL!,
        },
        user_service: {
            api_key: process.env.REANIME_USER_SERVICE_API_KEY!,
            /**
             * Current
             */
            url: process.env.REANIME_USER_SERVICE_URL!,
        },
        resource_service: {
            api_key: process.env.REANIME_RESOURCE_SERVICE_API_KEY!,
            /** Current */
            url: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL!,
        },
    };
})();

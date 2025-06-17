class EnvConfigClass {
    gaid = process.env.GOOGLE_ANALYTICS_ID as string;
    gtm_id = process.env.GOOGLE_TAG_MANAGER_ID as string;
    NODE_ENV = process.env.NODE_ENV as "development" | "production" | "test";
    server = {
        urls: {
            api: {
                prod: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_PROD as string,
                dev: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_DEV as string,
            },
        },
        secrets: {
            api: process.env.REANIME_RESOURCE_SERVICE_API_KEY as string,
        },
    };
    mode = {
        prod: this.NODE_ENV === "production",
        dev: this.NODE_ENV === "development",
        test: this.NODE_ENV === "test",
    };
}
/** Environment variables */
export const EnvConfig = new EnvConfigClass();

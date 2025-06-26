class EnvConfigClass {
    gaid = process.env.GOOGLE_ANALYTICS_ID as string;
    gtm_id = process.env.GOOGLE_TAG_MANAGER_ID as string;
    NODE_ENV = process.env.NODE_ENV as "development" | "production" | "test";
    integration_with_other_services = {
        resource_service_api: {
            secrets: {
                api_key: process.env.REANIME_RESOURCE_SERVICE_API_KEY as string,
            },

            url: {
                prod: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_PROD as string,
                dev: process.env.NEXT_PUBLIC_REANIME_RESOURCE_SERVICE_URL_DEV as string,
            },
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

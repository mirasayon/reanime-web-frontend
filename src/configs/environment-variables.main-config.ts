"use server";
import { type TypeRequiredEnvVarbs, required_env_variables } from "./needed-env-varbs.constants";
import { NoRequiredEnvVariebleError } from "@reanime/resource-parser/configs/env-error.class.js";
/** Load Environment variables */
export async function EnvConfig() {
    const E = new (class EnvConfigClass {
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
                /** Current */
                url: process.env.REANIME_USER_SERVICE_URL!,
            },
            resource_service: {
                api_key: process.env.REANIME_RESOURCE_SERVICE_API_KEY!,
                /** Current */
                url: process.env.REANIME_RESOURCE_SERVICE_URL!,
            },
        };
    })();
    // const _env =
    check();
    return E;
}
function check() {
    for (const eVar of required_env_variables) {
        if (!Object.hasOwn(process.env, eVar)) {
            throw new NoRequiredEnvVariebleError(eVar);
        }
        if (!["development", "test", "production"].includes(process.env.NODE_ENV ?? "")) {
            throw new Error(`Invalid NODE_ENV value: ${process.env.NODE_ENV}`);
        }
    }

    return process.env as TypeRequiredEnvVarbs;
}

"use server";
import { type TypeRequiredEnvVarbs, required_env_variables } from "./needed-env-varbs.constants";
import { NoRequiredEnvVariebleError } from "@reanime/resource-parser/configs/env-error.class.js";
export async function checkProcessEnv(): Promise<TypeRequiredEnvVarbs> {
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

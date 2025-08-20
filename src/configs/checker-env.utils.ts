"use server";
import { NoRequiredEnvVariebleError } from "@reanime/resource-service/configs/no-required-env-varieble-error.class.js";
export async function checkProcessEnv<T>(reqVarbs: readonly string[]): Promise<T> {
    for (const eVar of reqVarbs) {
        if (!Object.hasOwn(process.env, eVar)) {
            throw new NoRequiredEnvVariebleError(eVar);
        }
        if (!["development", "test", "production"].includes(process.env.NODE_ENV ?? "")) {
            throw new Error(`Invalid NODE_ENV value: ${process.env.NODE_ENV}`);
        }
    }

    return process.env as T;
}

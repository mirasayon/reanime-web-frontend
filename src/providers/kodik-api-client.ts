"use server";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { KodikApiClient } from "kodik-api-simplified/index";

export async function getKodikApi() {
    const envA = await loadEnvFile();
    const kodikClient = new KodikApiClient({
        token: envA.kodikApiToken,
    });
    return kodikClient;
}


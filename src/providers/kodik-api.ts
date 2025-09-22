"use server";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { ApiClient } from "kodik";
import ms from "ms";

export async function getKodikApi() {
    const envA = await loadEnvFile();
    const kodikClient = new ApiClient({
        token: envA.kodikApiToken,
        refineFetch: (url) => fetch(url, { method: "GET", next: { revalidate: ms("15m") } }),
    });
    return kodikClient;
}


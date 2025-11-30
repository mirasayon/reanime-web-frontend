"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { ApiClient } from "kodik";

export async function getKodikApi() {
    const envA = await nextLoadEnvSSR();
    const kodikClient = new ApiClient({
        token: envA.kodikApiToken,
        refineFetch: (url) =>
            fetch(url, { method: "GET", next: { revalidate: 1_800_000 } }),
    });
    return kodikClient;
}

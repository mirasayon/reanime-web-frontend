import { envServer } from "#/env/env-server";
import { ApiClient } from "kodik";

export const kodikClient = new ApiClient({
    token: envServer.kodikApiToken,
    refineFetch: (url) => fetch(url, { method: "GET", next: { revalidate: 1_800_000 } }),
});

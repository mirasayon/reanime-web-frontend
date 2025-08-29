import ms from "ms";
import type { APIMethods } from "./schema";

export interface KodikApiClientOptions {
    token: string;
    kodikApiUrl?: string;
}

export const KODIK_API_URL = "https://kodikapi.com";
//  (keyof APIMethods)[]
const endpointsArr = ["countries", "genres", "list", "qualities", "search", "translations", "years", "qualitiesV2", "translationsV2"] as const;

const remapEndpoints = {
    qualitiesV2: "qualities/v2",
    translationsV2: "translations/v2",
} as const;

export class KodikApiClientError extends Error {
    name: string = "KodikApiClientError";
}

export class KodikApiClient {
    public KODIK_API_URL: string;

    constructor({ token, kodikApiUrl }: KodikApiClientOptions) {
        this.KODIK_API_URL = kodikApiUrl ?? KODIK_API_URL;

        for (const endpointKey of endpointsArr) {
            const endpoint = remapEndpoints[endpointKey as keyof typeof remapEndpoints] ?? endpointKey;

            this[endpointKey] = async (params: Record<string, string>) => {
                const url = new URL(`${endpoint}?${new URLSearchParams({ token, ...params }).toString()}`, this.KODIK_API_URL);
                const res = await fetch(url, { next: { revalidate: ms("20m") } });
                if (res.headers.get("content-type") !== "application/json") {
                    throw new KodikApiClientError(
                        `invalid response (expected content-type application/json, but got ${res.headers.get("content-type")})`,
                    );
                }
                const json = await res.json();
                if (typeof json !== "object") {
                    throw new KodikApiClientError(`expected json as an object, but got a ${typeof json}`);
                }

                if ("error" in json) {
                    throw new KodikApiClientError(json.error as string);
                }
                return json;
            };
        }
    }
}
export interface KodikApiClient extends APIMethods {}

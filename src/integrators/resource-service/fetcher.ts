import { EnvConfig } from "#/configs/env";

export const fGet = new (class Fetcher {
    private baseUrl = EnvConfig.partners.resource_service.url.current;
    get = async <T>(url: URL | string) => {
        try {
            const res = await fetch(`${this.baseUrl}${url}`, {
                method: "GET",
                cache: EnvConfig.mode.prod ? "force-cache" : "no-cache",
                next: { revalidate: EnvConfig.mode.prod ? 86400 : 0 /** 24 Hours */ },
                headers: {
                    "x-resource-service-api-key": EnvConfig.partners.resource_service.api_key,
                },
            });
            if (res.status === 200) {
                return (await res.json()).data as T;
            }
            if (res.status === 404) {
                return null;
            }
            throw new Error(
                `Unknown Error happened while fetching data from the API: Status: ${res.status}, statusText: ${res.statusText}. statusCode: ${res.status}`,
            );
        } catch (error) {
            console.error(error);
            return null;
        }
    };
})();

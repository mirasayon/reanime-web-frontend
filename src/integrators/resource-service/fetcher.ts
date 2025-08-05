import { EnvConfig } from "#/configs/env";

const baseUrl = EnvConfig.partners.resource_service.url.current;

type Props = URL | string;
type ReturnType<T> = Promise<T>;
/** Reanime `Res Service` */
export const ResourseServiceFetcher = async <T>(url: Props): ReturnType<T> => {
    try {
        const res = await fetch(`${baseUrl}${url}`, {
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
            throw new Error("Status code is 404");
        }
        throw new Error(
            `Unknown Error happened while fetching res service: ${res.status}, statusText: ${res.statusText}. statusCode: ${
                res.status
            }, json: ${JSON.stringify((await res.json()) ?? "__undefined")}`,
        );
    } catch (error) {
        console.error(error);
        throw new Error("Fetching Error");
    }
};

import { EnvConfig } from "#/configs/env";
import { Logger } from "log-it-colored";

const baseUrl = EnvConfig.partners.resource_service.url;

type Props = URL | string;
type ReturnType<T> = Promise<T>;
/** Reanime `Res Service` */
export const ResourseServiceFetcher = async <T>(url: Props): ReturnType<T> => {
    try {
        // Logger.blue(`${baseUrl}${url}`);
        const Full_url = `${baseUrl}${url}`;
        const res = await fetch(Full_url, {
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
            throw new Error("Status code is 404: " + Full_url);
        }
        throw new Error(
            `Unknown Error accured while fetching res service: ${res.status}, statusText: ${res.statusText}. statusCode: ${
                res.status
            }, json: ${JSON.stringify((await res.json().catch(() => null)) ?? "__undefined")}`,
        );
    } catch (error) {
        console.error(error);
        throw new Error("Fetching Error");
    }
};

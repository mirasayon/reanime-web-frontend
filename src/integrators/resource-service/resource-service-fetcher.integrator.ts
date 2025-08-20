"use server";
import { LoadConfig } from "#/configs/environment-variables.main-config";

type Props = URL | string;
type ReturnType<T> = Promise<T>;
/** Reanime `Res Service` */
export async function ResourseServiceFetcher<T>(url: Props): ReturnType<T> {
    const _env = await LoadConfig();
    const baseUrl = _env.partners.resource_service.url;
    const Full_url = `${baseUrl}${url}`;
    const res = await fetch(Full_url, {
        method: "GET",
        // cache: _env.mode.prod ? "force-cache" : "no-cache",
        next: { revalidate: _env.mode.prod ? 86400 : 0 /** 24 Hours */ },
        headers: {
            "x-resource-service-api-key": _env.partners.resource_service.api_key,
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
}

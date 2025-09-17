"use server";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import ms from "ms";

type Props = URL | string;
/** Reanime `Res Service` */
export async function ResourseServiceFetcher<T>(url: Props): Promise<T> {
    const _env = await loadEnvFile();
    const baseUrl = _env.resource_service.url;
    const Full_url = `${baseUrl}${url}`;
    const res = await fetch(Full_url, {
        method: "GET",
        next: { revalidate: _env.mode.prod ? ms("1h") : false },
        headers: {
            authorization: "Apikey " + _env.resource_service.api_key,
        },
    });
    if (res.status === 200) {
        return (await res.json()).data as T;
    }
    if (res.status === 404) {
        throw new Error("Not found. Status 404. Url: " + Full_url);
    }
    const _json = JSON.stringify(await res.json().catch(() => null));
    throw new Error(
        `Unknown Error accured while fetching res service: ${res.status}, statusText: ${res.statusText}. status: ${res.status}, json: ${_json}`,
    );
}


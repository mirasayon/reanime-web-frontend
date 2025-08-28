"use server";
import { LoadConfig } from "#/configs/environment-variables.main-config";
import { externalApiConfig } from "#/configs/external-api-config";
import { Logger } from "log-it-colored";
import ms from "ms";

type Props = URL | string;
type ReturnType<T> = Promise<T>;
/** Reanime `Res Service` */
export async function ResourseServiceFetcher<T>(url: Props): ReturnType<T> {
    const baseUrl = externalApiConfig.kodikApiUrl;
    const _env = await LoadConfig();
    const Full_url = `${baseUrl}${url}&token=${_env.korikApiToken}`;
    Logger.blue("SERVER FETCH: ", Full_url);
    const res = await fetch(Full_url, {
        method: "GET",
        // cache: _env.mode.prod ? "force-cache" : "no-cache",
        next: { revalidate: _env.mode.prod ? ms("1h") : 0 },
    });
    if (res.status === 200) {
        return (await res.json()) as T;
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


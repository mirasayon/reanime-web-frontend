"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import consola from "consola";
import { mainUserServiceFetcher } from "./user-service-fetcher.integrator-util";
import type { UserServiceHttpResponseBodyPatternType } from "#user-service/user-service-response-types-for-all.routes.js";
type Props = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url:
        | `/v1/${
              | "profile"
              | "authentication"
              | "ping"
              | "account"
              | "comment"
              | "reply"
              | "favorite_animes"
              | "marked_collection"}${string & {}}`;

    session_token?: string;
    ip: string | undefined;
    agent: string | undefined;
};
export async function mainUserServiceFetcherForPingingOnly<T>({
    url,
    agent,
    method,
    session_token,
    ip,
}: Props): Promise<UserServiceHttpResponseBodyPatternType<T> | 500> {
    try {
        const full_url = process.env.NEXT_PUBLIC_USER_SERVICE_URL! + url;
        const headers: HeadersInit = {};
        if (agent) {
            headers["user-agent"] = agent;
        }
        if (session_token) {
            headers["Authorization"] = `Bearer ${session_token}`;
        }
        if (ip) {
            headers["x-forwarded-for"] = ip;
        }
        headers["x-reanime-user-service-key"] = (await nextLoadEnvSSR()).user_service_api_key;
        const response = await fetch(full_url, {
            method: method,
            headers: headers,
            cache: "no-cache",
        });
        const jsoned = (await response.json()) as UserServiceHttpResponseBodyPatternType<T>;
        return jsoned;
    } catch (error) {
        consola.fail(mainUserServiceFetcher.name, ":", error);
        return 500;
    }
}

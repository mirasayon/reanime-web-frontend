"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import type { UserServiceResponseBodyPattern } from "#user-service/shared/response-patterns/response-json-body-shape.js";
import consola from "consola";
import { mainUserServiceFetcher } from "./user-service-fetcher.integrator-util";
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
}: Props): Promise<UserServiceResponseBodyPattern<T> | 500> {
    try {
        const full_url = (await nextLoadEnvSSR()).user_service.url + url;
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
        headers["x-reanime-user-service-key"] = (
            await nextLoadEnvSSR()
        ).user_service.api_key;
        const response = await fetch(full_url, {
            method: method,
            headers: headers,
            cache: "no-cache",
        });
        const jsoned =
            (await response.json()) as UserServiceResponseBodyPattern<T>;
        return jsoned;
    } catch (error) {
        consola.fail(mainUserServiceFetcher.name, ":", error);
        return 500;
    }
}

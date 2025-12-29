"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { isUserServiceAliveNow } from "#/settings/user-service";
import type { UserServiceHttpResponseBodyPatternType } from "#user-service/user-service-response-types-for-all.routes.js";
import consola from "consola";
import { getUserAgentAndIpFromCookies } from "../get-token-from-cookies";
type Props<B> =
    | {
          jsonBody?: B | undefined;
          rawBody?: BodyInit | undefined;
      }
    | undefined;
export async function mainUserServiceFetcher<T, B = { [key: string]: string }>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: Props<B>,
): Promise<UserServiceHttpResponseBodyPatternType<T> | 500> {
    try {
        const { jsonBody, rawBody } = body || {};
        const { ip, agent, token: session_token } = await getUserAgentAndIpFromCookies();
        if (!(await isUserServiceAliveNow())) {
            return 500;
        }
        if (rawBody && jsonBody) {
            throw new Error("`raw_body` and `json_body` must not exist at the same time");
        }
        const full_url = process.env.NEXT_PUBLIC_USER_SERVICE_URL! + url;
        const headers: HeadersInit = {
            ...(jsonBody ? { "Content-Type": "application/json" } : {}),
        };
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
            ...(jsonBody ? { body: JSON.stringify(jsonBody) } : {}),
            ...(rawBody ? { body: rawBody } : {}),
            cache: "no-cache",
        });
        const jsoned = (await response.json()) as UserServiceHttpResponseBodyPatternType<T>;
        return jsoned;
    } catch (error) {
        if (error instanceof TypeError) {
            consola.fail(mainUserServiceFetcher.name, ":", error.message);
        } else {
            consola.warn("[The error is not with the network]: ", mainUserServiceFetcher.name, ": ", error);
        }
        return 500;
    }
}

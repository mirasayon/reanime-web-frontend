"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import type { UserServiceHttpResponseBodyPatternType } from "#user-service/user-service-response-types-for-all.routes.ts";
import consola from "consola";
import { getUserAgentAndIpFromCookies } from "../get-token-from-cookies";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/user-service-static";
type Props<B> =
    | {
          jsonBody?: B | undefined;
          rawBody?: BodyInit | undefined;
      }
    | undefined;
export async function fetchTheUserService<T, B = { [key: string]: string }>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: Props<B>,
): Promise<UserServiceHttpResponseBodyPatternType<T> | 500> {
    try {
        if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
            return 500;
        }
        const { jsonBody, rawBody } = body || {};
        const { ip, agent, token: session_token } = await getUserAgentAndIpFromCookies();

        if (rawBody && jsonBody) {
            throw new Error("`raw_body` and `json_body` must not exist at the same time");
        }
        const full_url = process.env.NEXT_PUBLIC_USER_SERVICE_URL! + "/v1" + url;
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
        headers["x-api-key"] = (await nextLoadEnvSSR()).user_service_api_key;
        const response = await fetch(full_url, {
            method: method,
            headers: headers,
            ...(jsonBody ? { body: JSON.stringify(jsonBody) } : {}),
            ...(rawBody ? { body: rawBody } : {}),
            cache: "no-cache",
        });
        return (await response.json()) as UserServiceHttpResponseBodyPatternType<T>;
    } catch (error) {
        if (error instanceof TypeError) {
            consola.fail(fetchTheUserService.name, ":", error.message);
        } else {
            consola.warn("[The error is not with the network]: ", fetchTheUserService.name, ": ", error);
        }
        return 500;
    }
}

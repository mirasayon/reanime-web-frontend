"use server";
import { envServer } from "#/env/env-server";
import type { UserServiceHttpResponseBodyPatternType } from "#user-service/user-service-response-types-for-all.routes.ts";
import { getUserAgentAndIpFromCookies } from "../get-token-from-cookies";
import { envClient } from "#/env/env-client";
type RequestBodyType<B> = {
    jsonBody?: B;
    rawBody?: BodyInit;
};
export async function fetchTheUserService<T, B = { [key: string]: string }>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: RequestBodyType<B>,
): Promise<UserServiceHttpResponseBodyPatternType<T> | 500> {
    try {
        const { jsonBody, rawBody } = body || {};
        const { ip, agent, token: session_token } = await getUserAgentAndIpFromCookies();

        if (rawBody && jsonBody) {
            throw new Error("`raw_body` and `json_body` must not exist at the same time");
        }
        const full_url = envClient.userServiceUrl + "/v1" + url;
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
        headers["x-api-key"] = envServer.userServiceApiKey;
        const response = await fetch(full_url, {
            method: method,
            headers: headers,
            ...(jsonBody ? { body: JSON.stringify(jsonBody) } : {}),
            ...(rawBody ? { body: rawBody } : {}),
            cache: "no-cache",
        });
        return (await response.json()) as UserServiceHttpResponseBodyPatternType<T>;
    } catch (error) {
        console.error("[The error is not with the network]: ", fetchTheUserService.name, ": ", error);

        return 500;
    }
}

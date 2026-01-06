"use server";
import { envServer } from "#/env/env-server";
import type { UserServiceHttpResponseBodyPatternType } from "#user-service/user-service-response-types-for-all.routes.ts";
import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { cookies as nextCookies } from "next/headers";
import { headers as nextHeaders } from "next/headers";
import { envClient } from "#/env/env-client";
type RequestBodyType<B> = {
    jsonBody?: B;
    rawBody?: BodyInit;
};
export async function userServiceRequest<T, B = { [key: string]: string }>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: RequestBodyType<B>,
): Promise<UserServiceHttpResponseBodyPatternType<T>> {
    try {
        const { jsonBody, rawBody } = body || {};
        const _header = await nextHeaders();
        const _cookie = await nextCookies();
        const session_token = _cookie.get(SESSION_TOKEN_NAME)?.value;
        const ip = _header.get("x-forwarded-for");
        const agent = _header.get("user-agent");
        if (rawBody && jsonBody) {
            throw new Error(`"rawBody" and "jsonBody" are mutually exclusive`);
        }
        const fullUrl = envClient.userServiceUrl + "/v1" + url;
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
        const response = await fetch(fullUrl, {
            method: method,
            headers: headers,
            ...(jsonBody ? { body: JSON.stringify(jsonBody) } : {}),
            ...(rawBody ? { body: rawBody } : {}),
            cache: "no-cache",
        });
        return (await response.json()) as UserServiceHttpResponseBodyPatternType<T>;
    } catch (error) {
        console.error("Error in fetchTheUserService: ", error);
        throw new Error("Internal Server Error");
    }
}

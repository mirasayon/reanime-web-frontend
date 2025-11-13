"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import type { UserServiceResponseBodyPattern } from "&us/response-patterns/response-json-body-shape";
type Props<B> = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: `/v1/${"profile" | "authentication" | "ping" | "account" | "comment" | "reply" | "favorite_animes" | "marked_collection"}/${string}`;
    json_body?: B;
    session_token?: string;
    ip: string | undefined;
    raw_body?: BodyInit | null | undefined;
    agent: string | undefined;
};
export async function UserServiceFetcher<T, B = { [key: string]: string }>({
    url,
    agent,
    method,
    session_token,
    json_body,
    raw_body,
    ip,
}: Props<B>): Promise<UserServiceResponseBodyPattern<T>> {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        const _default: UserServiceResponseBodyPattern<T> = {
            data: "DEFAULT" as unknown as T,
            message: "DEFAULT",
            ok: false,
            response_code: "SERVICE_UNAVAILABLE",
            status_code: 503,
            errors: ["DEFAULT"],
        };
        return _default;
    }
    if (raw_body && json_body) {
        throw new Error("`raw_body` and `json_body` must not exist at the same time");
    }
    const full_url = (await nextLoadEnvSSR()).user_service.url + url;

    const headers: HeadersInit = {
        ...(json_body ? { "Content-Type": "application/json" } : {}),
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
    headers["x-reanime-user-service-key"] = (await nextLoadEnvSSR()).user_service.api_key;
    const response = await fetch(full_url, {
        method: method,
        headers: headers,
        ...(json_body ? { body: JSON.stringify(json_body) } : {}),
        ...(raw_body ? { body: raw_body } : {}),
        cache: "no-cache",
    });
    const _req_json = await response.json();
    const jsoned = _req_json as UserServiceResponseBodyPattern<T>;
    if (!response.ok) {
        return jsoned;
    }
    return jsoned;
}

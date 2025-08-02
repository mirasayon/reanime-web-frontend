"use server";

import { EnvConfig } from "#/configs/env";
import { UserServiceResponceBodyPattern } from "reanime/user-service/response/types.js";
export async function UserServiceFetcher<T, B = { [key: string]: string }>({
    url,
    agent,
    method,
    session_token,
    json_body,
    raw_body,
    ip,
}: {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    json_body?: B;
    session_token?: string;
    ip?: string;
    raw_body?: BodyInit | null | undefined;
    agent?: string;
}): Promise<UserServiceResponceBodyPattern<T>> {
    if (raw_body && json_body) {
        throw new Error("Invalid body */3");
    }
    const full_url = EnvConfig.partners.user_service.url.current + url;

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
    headers["x-reanime-user-service-key"] = EnvConfig.partners.user_service.api_key;
    const response = await fetch(full_url, {
        method: method,
        headers: headers,
        ...(json_body ? { body: JSON.stringify(json_body) } : {}),
        ...(raw_body ? { body: raw_body } : {}),
        cache: "no-cache",
    });
    const _req_json = await response.json();
    const jsoned = _req_json as UserServiceResponceBodyPattern<T>;
    if (!response.ok) {
        return jsoned;
    }
    return jsoned;
}

"use server";

import { EnvConfig } from "#/configs/env";

export async function Post<T extends unknown, B extends {}>({
    url,
    cookies,
    agent,
    body,
    ip,
}: {
    url: string;
    cookies: {
        [key: string]: string | undefined;
    };
    body?: B;
    ip?: string;
    agent?: string;
}): Promise<T> {
    const full_url = EnvConfig.partners.user_service.url.current + url;

    // Build headers
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };
    // const _body: BodyInit = data !== undefined ? { body: JSON.stringify(data) } : {};
    const cookieHeader = Object.entries(cookies)
        .map(([name, val]) => {
            if (!val) {
                return "";
            }
            return `${name}=${val}`;
        })
        .join("; ");
    if (cookieHeader) {
        headers["cookie"] = cookieHeader;
    }
    // Forward the UA and IP if provided
    if (agent) {
        headers["user-agent"] = agent;
    }
    if (ip) {
        headers["x-forwarded-for"] = ip;
    }
    headers["x-reanime-user-service-key"] = EnvConfig.partners.user_service.api_key;
    const response = await fetch(full_url, {
        method: "POST",
        headers,
        ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
        cache: "no-cache",
    });
    if (!response.ok) {
        const text = await response.text().catch((e) => {
            return "";
        });
        throw new Error(`POST ${full_url} failed: ${response.status} ${response.statusText}${text ? ` — ${text}` : ""}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
        return (await response.json()) as T;
    }
    throw new Error(`The server responded with unexpected data: ${response.body}`);
}

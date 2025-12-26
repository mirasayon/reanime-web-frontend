"use server";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { isUserServiceAliveNow } from "#/settings/user-service";
import type { HTTPResponseBodyPattern } from "#user-service/response-codes-constants.shared.js";
import consola from "consola";
import { getUserAgentAndIpFromCookies } from "../get-token-from-cookies";
type Props<B> = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    json_body?: B;
    raw_body?: BodyInit;
};
export async function mainUserServiceFetcher<T, B = { [key: string]: string }>({
    url,
    method,
    json_body,
    raw_body,
}: Props<B>): Promise<HTTPResponseBodyPattern<T> | 500> {
    try {
        const { ip, agent, token: session_token } = await getUserAgentAndIpFromCookies();
        if (!(await isUserServiceAliveNow())) {
            return 500;
        }
        if (raw_body && json_body) {
            throw new Error("`raw_body` and `json_body` must not exist at the same time");
        }
        const full_url = process.env.NEXT_PUBLIC_USER_SERVICE_URL! + url;
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
        headers["x-reanime-user-service-key"] = (await nextLoadEnvSSR()).user_service_api_key;
        const response = await fetch(full_url, {
            method: method,
            headers: headers,
            ...(json_body ? { body: JSON.stringify(json_body) } : {}),
            ...(raw_body ? { body: raw_body } : {}),
            cache: "no-cache",
        });
        const jsoned = (await response.json()) as HTTPResponseBodyPattern<T>;
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

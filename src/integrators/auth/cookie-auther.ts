"use server";
import { UserService } from "#/configs/user-service";
import type { cookies as CookiesNext, headers as HeadersNext } from "next/headers";
import { Authentication_ResponseTypes } from "reanime/user-service/response/response-data-types.js";
import { UserServiceFetcher } from "../user_service/fetcher";
type NextHeaders = Awaited<ReturnType<typeof HeadersNext>>;
type NextCookies = Awaited<ReturnType<typeof CookiesNext>>;
type AutherType = { data: Authentication_ResponseTypes.check_session; ip?: string; agent?: string };
export async function getSessionFromClient({ cookies, headers }: { cookies: NextCookies; headers: NextHeaders }): Promise<AutherType | null> {
    const agent = headers.get("user-agent") ?? undefined;
    const ip = headers.get("x-forwarded-for") ?? undefined;
    const session_token = cookies.get(UserService.session_token_name)?.value;
    const res = await UserServiceFetcher<Authentication_ResponseTypes.check_session>({
        method: "POST",
        url: "/v1/authentication/check_session",
        agent: agent,
        ip: ip,
        session_token: session_token,
    });

    if (res.errors.length) {
        return null;
    }
    if (!res.data) {
        // throw new Error("Ошибка сервера");
        return null;
    }
    if (res.status_code === 200) {
        return { data: res.data, ip, agent };
    }
    return null;
}

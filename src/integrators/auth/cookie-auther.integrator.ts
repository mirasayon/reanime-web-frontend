"use server";
import { UserService } from "#/configs/user-service.app-config";
import type { cookies as CookiesNext, headers as HeadersNext } from "next/headers";
import type { Authentication_ResponseTypes } from "@reanime.art/user-service/types/responses/routes/auth.js";
import { UserServiceFetcher } from "../user_service/user-service-fetcher.integrator-util";
type NextHeaders = Awaited<ReturnType<typeof HeadersNext>>;
type NextCookies = Awaited<ReturnType<typeof CookiesNext>>;
export type AutherType = { data: Authentication_ResponseTypes.check_session; ip: string | undefined; agent: string | undefined };
export async function getSessionFromClient({ cookies, headers }: { cookies: NextCookies; headers: NextHeaders }): Promise<AutherType | null> {
    return null;
}
async function _getSessionFromClient({ cookies, headers }: { cookies: NextCookies; headers: NextHeaders }): Promise<AutherType | null> {
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
    cookies.delete({ name: UserService.session_token_name });
    return null;
}

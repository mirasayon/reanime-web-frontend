"use server";
import { UserService } from "#/configs/user-service.app-config";
import { cookies, headers } from "next/headers";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Authentication_ResponseTypes } from "&us/response-patterns/authentication.routes";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
export async function getSessionFromClient(): Promise<AutherType | null> {
    const _headers = await headers();
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;
    const __cookies = await cookies();
    const session_token = __cookies.get(UserService.session_token_name)?.value;
    if (!session_token || session_token.length < 20) {
        return null;
    }
    const res = await UserServiceFetcher<Authentication_ResponseTypes.check_session>({
        method: "POST",
        url: "/v1/authentication/check_session",
        agent: agent,
        ip: ip,
        session_token: session_token,
    });

    if (res.data && res.status_code === 200) {
        const profile = await UserServiceFetcher<Profile_ResponseTypes.view_my_profile>({
            method: "GET",
            url: "/v1/profile/view_my_profile",
            agent: agent,
            ip: ip,
            session_token: session_token,
        });
        if (profile.data) {
            return { data: res.data, ip, agent, profile: profile.data };
        }
    }
    __cookies.delete(UserService.session_token_name);
    return null;
}
export type AutherType = {
    data: Authentication_ResponseTypes.check_session;
    ip: string | undefined;
    agent: string | undefined;
    profile: Profile_ResponseTypes.view_my_profile;
};

"use server";
import { UserService } from "#/configs/user-service.app-config";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Authentication_ResponseTypes } from "&us/response-patterns/authentication.routes";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { cookies, headers } from "next/headers";
export async function sessionAuthenticator(): Promise<AuthenticatorType | null> {
    const _headers = await headers();
    const _cookies = await cookies();
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;
    const session_token = _cookies.get(UserService.session_token_name)?.value;
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
    if (session_token !== "" && typeof session_token === "string") {
        _cookies.delete(UserService.session_token_name);
    }
    return null;
}
export type AuthenticatorType = {
    data: Authentication_ResponseTypes.check_session;
    ip: string | undefined;
    agent: string | undefined;
    profile: Profile_ResponseTypes.view_my_profile;
};

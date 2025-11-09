"use server";
import { cookies, headers } from "next/headers";
import { ShowOthersProfile } from "./show-others-profile";
import { ShowMyProfile_Dashboard } from "./show-my-profile";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { SearchParams } from "#T/nextjs";
import { UserService } from "#/configs/user-service.app-config";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { notFound } from "next/navigation";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
export default async function __Profile_Page({
    params,
    searchParams,
}: {
    params: Promise<{ username: string }>;
    searchParams: SearchParams;
}): Promise<React.JSX.Element> {
    const _params = await params;
    const _username = _params.username;
    const _cookies = await cookies();
    // const _headers = await headers();
    const auth = await sessionAuthenticator();
    // {
    // cookies: _cookies,
    // headers: _headers,
    // });

    const session_token = _cookies.get(UserService.session_token_name)?.value;
    if (!auth) {
        const env = await loadEnvFile();
        const base_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
            method: "GET",
            url: `/v1/profile/explore_others_profile/${_username}`,
            ip: undefined,
            agent: undefined,
        });

        if (base_profile_data.status_code === 404) {
            return notFound();
        }

        if (!base_profile_data.data) {
            return notFound();
        }
        return <ShowOthersProfile data={base_profile_data.data} userServiceBaseUrl={env.user_service.url} />;
    }
    const ip = auth.ip;
    const agent = auth.agent;
    const env = await loadEnvFile();
    const my_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_my_profile>({
        method: "GET",
        agent: agent,
        ip: ip,
        url: `/v1/profile/view_my_profile`,
        session_token: session_token,
    });

    if (my_profile_data.status_code === 404) {
        return notFound();
    }

    if (!my_profile_data.data) {
        return notFound();
    }
    const data = my_profile_data.data;
    return <ShowMyProfile_Dashboard data={data} userServiceBaseUrl={env.user_service.url} />;
}

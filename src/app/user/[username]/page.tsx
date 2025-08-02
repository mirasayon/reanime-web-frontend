"use server";
import { My_Profile_Dashboard } from "#/components/users/my-profile";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import { UserService } from "#/configs/user-service";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { NextJS_Types } from "#T/next";
import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import { Profile_ResponseTypes } from "reanime/user-service/response/response-data-types.js";
import { Upload_avatar_or_show } from "../upload_avatar_or_show";
import { Logout_user } from "#/components/auth/log-out";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
export default async function __Profile_Page({
    params,
    searchParams,
}: {
    params: NextJS_Types.Params<{ username: string }>;
    searchParams: NextJS_Types.SearchParams;
}): Promise<React.JSX.Element> {
    const _params = await params;
    const _username = _params.username;
    const _cookies = await cookies();
    const _headers = await headers();
    const auth = await getSessionFromClient({
        cookies: _cookies,
        headers: _headers,
    });
    const session_token = _cookies.get(UserService.session_token_name)?.value;
    if (!auth) {
        const base_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
            method: "GET",
            url: `/v1/profile/explore_others_profile/${_username}`,
        });

        if (base_profile_data.status_code === 404) {
            return notFound();
        }

        if (!base_profile_data.data) {
            return notFound();
        }
        return (
            <>
                <Others_Profile_Dashboard profile={base_profile_data.data.profile} account={base_profile_data.data.account} />
            </>
        );
    }

    const my_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_my_profile>({
        method: "GET",
        agent: auth.agent,
        ip: auth.ip,
        url: `/v1/profile/view_my_profile`,
        session_token: session_token,
    });

    if (my_profile_data.status_code === 404) {
        return notFound();
    }

    if (!my_profile_data.data) {
        return notFound();
    }
    return (
        <>
            <div>Ваш профиль</div>
            <Upload_avatar_or_show profile={my_profile_data.data.profile} />
            <My_Profile_Dashboard profile={my_profile_data.data.profile} account={my_profile_data.data.account} />
            <Logout_user />
        </>
    );
}

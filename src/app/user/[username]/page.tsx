"use server";
import { UserService } from "#/configs/user-service";
import { NextJS_Types } from "#T/next";
import { cookies, headers } from "next/headers";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { ShowOthersProfile } from "./show-others-profile";
import { ShowMyProfile_Dashboard } from "./show-my-profile";
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
        return <ShowOthersProfile username={_username} />;
    }

    return <ShowMyProfile_Dashboard ip={auth.ip} agent={auth.agent} session_token={session_token} />;
}

"use server";
import { cookies } from "next/headers";
import { ShowOthersProfile } from "./show-others-profile";
import { ShowMyProfile_Dashboard } from "./show-my-profile";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { SearchParams } from "#T/nextjs";
import { UserService } from "#/configs/user-service.app-config";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { notFound } from "next/navigation";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import { ComingSoon } from "#/components/info/coming-soon";
import type { Comment } from "#user-service/databases/orm/client.js";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { createHmac } from "node:crypto";
export default async function __Profile_Page({
    params,
    searchParams,
}: {
    params: Promise<{ username: string }>;
    searchParams: SearchParams;
}): Promise<React.JSX.Element> {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return <ComingSoon />;
    }
    const _params = await params;
    const _username = _params.username;
    const _cookies = await cookies();
    const auth = await sessionAuthenticator();
    const session_token = _cookies.get(UserService.session_token_name)?.value;
    const _env = await nextLoadEnvSSR();
    const base_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
        method: "GET",
        url: `/v1/profile/explore_others_profile/${_username}`,
        ip: undefined,
        agent: undefined,
    });
    if (!base_profile_data.ok || !base_profile_data?.data) {
        return notFound();
    }
    const commentsByThisProfile: Omit<Comment, "by_profile_id">[] = [];
    const all_comments_from_this_user = await UserServiceFetcher<Comment_ResponseTypes.all_for_public_profile>({
        method: "GET",
        url: `/v1/comment/get/all_for_public_profile/${base_profile_data.data.account.username}?page=1&limit=100`,
        ip: undefined,
        agent: undefined,
    });
    if (all_comments_from_this_user.ok && all_comments_from_this_user.data) {
        for (const commentElements of all_comments_from_this_user.data) {
            commentsByThisProfile.push({
                anime_id: commentElements.anime_id,
                created_at: commentElements.created_at,
                content: commentElements.content,
                updated_at: commentElements.updated_at,
                is_visible: commentElements.is_visible,
                id: createHmac("sha256", commentElements.by_profile_id).update(commentElements.id).digest("base64url"),
            });
        }
    }
    if (!auth) {
        if (!base_profile_data.data) {
            return notFound();
        }
        return <ShowOthersProfile data={base_profile_data.data} userServiceBaseUrl={_env.user_service.url} />;
    }
    const ip = auth.ip;
    const agent = auth.agent;
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
    return <ShowMyProfile_Dashboard data={data} commentsByThisProfile={commentsByThisProfile} userServiceBaseUrl={_env.user_service.url} />;
}

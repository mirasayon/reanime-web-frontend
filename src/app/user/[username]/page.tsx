"use server";
import { ComingSoon } from "#/components/info/coming-soon";
import { SecuritySettingsDashboardComponent } from "#/components/security-settings-dashboard/security-settings-list-component";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { isUserServiceAliveNow } from "#/settings/user-service";
import { rea_wrapper_border } from "#/styles/provider";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { notFound } from "next/navigation";
import { CommentsFromUserList } from "./inside-profile-ui/comments-by-one-user";
import { MainShowMyProfileDashboard } from "./show-my-profile";
import { ShowOthersProfile } from "./show-others-profile";
export default async function __User__Page({
    params,
}: {
    params: Promise<{ username: string }>;
}): Promise<React.JSX.Element> {
    if (!(await isUserServiceAliveNow())) {
        return <ComingSoon />;
    }
    const _params = await params;
    const _username = _params.username;
    const auth = await sessionAuthenticator_S_A();
    const base_profile_data = await mainUserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
        method: "GET",
        url: `/v1/profile/explore_others_profile/${_username}`,
        ip: undefined,
        agent: undefined,
    });
    if (!base_profile_data || base_profile_data === 500 || auth === 500) {
        return notFound();
    }
    if (!base_profile_data.ok || !base_profile_data?.data) {
        return notFound();
    }
    const all_comments_from_this_user = await mainUserServiceFetcher<Comment_ResponseTypes.all_for_public_profile>({
        method: "GET",
        url: `/v1/comment/get/all_for_public_profile/${base_profile_data.data.account.username}?page=1&limit=100`,
        ip: undefined,
        agent: undefined,
    });
    if (!auth || auth?.data.account.username !== base_profile_data.data.account.username) {
        return (
            <ShowOthersProfile
                data={base_profile_data.data}
                userServiceBaseUrl={process.env.NEXT_PUBLIC_USER_SERVICE_URL!}
            />
        );
    }
    const ip = auth.ip;
    const agent = auth.agent;
    const my_profile_data = await mainUserServiceFetcher<Profile_ResponseTypes.view_my_profile>({
        method: "GET",
        agent: agent,
        ip: ip,
        url: `/v1/profile/view_my_profile`,
        session_token: auth.data.session.token,
    });
    if (!my_profile_data || my_profile_data === 500) {
        return notFound();
    }
    if (my_profile_data.status_code === 404) {
        return notFound();
    }
    if (!my_profile_data.data) {
        return notFound();
    }
    const loggedUser = my_profile_data.data;
    return (
        <>
            <MainShowMyProfileDashboard data={loggedUser} />
            <div className={rea_wrapper_border}>
                <SecuritySettingsDashboardComponent />
                {all_comments_from_this_user !== 500 && all_comments_from_this_user ? (
                    <CommentsFromUserList comments={all_comments_from_this_user?.data || []} />
                ) : (
                    <div className=" p-2">Ошибка при загрузке комментариев</div>
                )}
            </div>
        </>
    );
}

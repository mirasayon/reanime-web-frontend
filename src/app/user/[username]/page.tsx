"use server";
import { ComingSoon } from "#/components/info/coming-soon";
import { SecuritySettingsDashboardComponent } from "#/components/security-settings-dashboard/security-settings-list-component";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { isUserServiceAliveNow } from "#/settings/user-service";
import { rea_wrapper_border } from "#/styles/provider";
import { notFound } from "next/navigation";
import { CommentsFromUserList } from "./inside-profile-ui/comments-by-one-user";
import { MainShowMyProfileDashboard } from "./show-my-profile";
import { ShowOthersProfile } from "./show-others-profile";
import type {
    ResponseTypesFor_CommentForAnime_Section,
    ResponseTypesFor_UserProfile_Section,
} from "#user-service/user-service-response-types-for-all.routes.js";
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
    const base_profile_data = await mainUserServiceFetcher<ResponseTypesFor_UserProfile_Section["view_other_profiles"]>(
        `/v1/profile/explore_others_profile/${_username}`,
        "GET",
    );
    if (!base_profile_data || base_profile_data === 500 || auth === 500) {
        return notFound();
    }
    if (!base_profile_data.ok || !base_profile_data?.data) {
        return notFound();
    }
    const all_comments_from_this_user = await mainUserServiceFetcher<
        ResponseTypesFor_CommentForAnime_Section["all_for_public_profile"]
    >(`/v1/comment/get/all_for_public_profile/${base_profile_data.data.username}?page=1&limit=100`, "GET");
    if (!auth || auth?.data.username !== base_profile_data.data.username) {
        return (
            <ShowOthersProfile
                data={base_profile_data.data}
                userServiceBaseUrl={process.env.NEXT_PUBLIC_USER_SERVICE_URL!}
            />
        );
    }
    const my_profile_data = await mainUserServiceFetcher<ResponseTypesFor_UserProfile_Section["view_my_profile"]>(
        `/v1/profile/view_my_profile`,
        "GET",
    );
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

"use server";
import { SecuritySettingsDashboardComponent } from "#/components/security-settings-dashboard/security-settings-list-component";
import { getAccountSession } from "#/integration/user-service/auth/get-account-session";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { BORDER } from "#/styles/style-constants";
import { notFound } from "next/navigation";
import { CommentsFromUserList } from "./inside-profile-ui/comments-by-one-user";
import { MyProfileDashboard } from "./show-my-profile";
import { ShowOthersProfile } from "./show-others-profile";
import type {
    ResponseTypesFor_AnimeBookmark_Section,
    ResponseTypesFor_CommentForAnime_Section,
    ResponseTypesFor_UserProfile_Section,
} from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { AnimeBookmarkCollectionForProfile } from "../anime-collections-for-profile/anime-bookmark-collection-for-profile";
import type { Metadata } from "next";
export default async function __UserPage({
    searchParams,
    params,
}: {
    params: Promise<{ username: string }>;
    searchParams: Promise<{ animeStatusTab: string | undefined }>;
}): Promise<React.JSX.Element> {
    const _searchParams = await searchParams;
    const _params = await params;
    if (_params.username?.length < 4) {
        return notFound();
    }
    const auth = await getAccountSession();
    const base_profile_data = await userServiceRequest<ResponseTypesFor_UserProfile_Section["view_other_profiles"]>(
        endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.exploreOthersProfile(_params.username),
        "GET",
    );
    if (!base_profile_data || !base_profile_data.ok || !base_profile_data?.data) {
        return notFound();
    }
    const all_comments_from_this_user = await userServiceRequest<
        ResponseTypesFor_CommentForAnime_Section["all_for_public_profile"]
    >(
        endpointsConfig.commentAboutAnime.baseUrl +
            endpointsConfig.commentAboutAnime.getAllCommentsFromProfile(_params.username) +
            "?page=1&limit=100",
        "GET",
    );
    if (!auth || auth?.username !== base_profile_data.data.username) {
        return <ShowOthersProfile data={base_profile_data.data} />;
    }
    const my_profile_data = await userServiceRequest<ResponseTypesFor_UserProfile_Section["view_my_profile"]>(
        endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.viewMyProfile,
        "GET",
    );
    if (!my_profile_data || my_profile_data.status_code === 404 || !my_profile_data.data) {
        return notFound();
    }
    const animeCollection = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["get_all_list"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.getAllList,
        "GET",
    );
    const watchingIds =
        animeCollection.data?.filter((item) => item.status === "WATCHING").map((item) => item.external_anime_id) || [];
    const abandonedIds =
        animeCollection.data?.filter((item) => item.status === "ABANDONED").map((item) => item.external_anime_id) || [];
    const plannedIds =
        animeCollection.data?.filter((item) => item.status === "PLANNED").map((item) => item.external_anime_id) || [];
    const completedIds =
        animeCollection.data?.filter((item) => item.status === "COMPLETED").map((item) => item.external_anime_id) || [];
    return (
        <>
            <MyProfileDashboard data={my_profile_data.data} />
            <div className={BORDER}>
                <SecuritySettingsDashboardComponent />
                {all_comments_from_this_user ? (
                    <CommentsFromUserList comments={all_comments_from_this_user?.data || []} />
                ) : (
                    <div className=" p-2">Ошибка при загрузке комментариев</div>
                )}
            </div>
            <AnimeBookmarkCollectionForProfile
                tab={_searchParams.animeStatusTab}
                abandonedIds={abandonedIds}
                watchingIds={watchingIds}
                plannedIds={plannedIds}
                completedIds={completedIds}
            />
        </>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
    const _params = await params;
    if (_params.username.length < 4) {
        return notFound();
    }
    return {
        title: `@${_params.username}`,
        description: `Профиль пользователя @${_params.username}`,
    };
}

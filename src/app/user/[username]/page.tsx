"use server";
import { SecuritySettingsDashboardComponent } from "#/components/security-settings-dashboard/security-settings-list-component";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { rea_wrapper_border } from "#/styles/provider";
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
export default async function __User__Page({
    searchParams,
    params,
}: {
    params: Promise<{ username: string }>;

    searchParams: Promise<{ animeStatusTab: string | undefined }>;
}): Promise<React.JSX.Element> {
    const _searchParams = await searchParams;
    const _params = await params;
    const _username = _params.username;
    const auth = await sessionAuthenticator();
    const base_profile_data = await fetchTheUserService<ResponseTypesFor_UserProfile_Section["view_other_profiles"]>(
        endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.exploreOthersProfile(_username),
        "GET",
    );
    if (!base_profile_data || !base_profile_data.ok || !base_profile_data?.data) {
        return notFound();
    }
    const all_comments_from_this_user = await fetchTheUserService<
        ResponseTypesFor_CommentForAnime_Section["all_for_public_profile"]
    >(
        endpointsConfig.commentAboutAnime.baseUrl +
            endpointsConfig.commentAboutAnime.getAllCommentsFromAnyProfile(_username) +
            "?page=1&limit=100",
        "GET",
    );
    if (!auth || auth?.data.username !== base_profile_data.data.username) {
        return <ShowOthersProfile data={base_profile_data.data} />;
    }
    const my_profile_data = await fetchTheUserService<ResponseTypesFor_UserProfile_Section["view_my_profile"]>(
        endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.viewMyProfile,
        "GET",
    );
    if (!my_profile_data || my_profile_data.status_code === 404 || !my_profile_data.data) {
        return notFound();
    }
    const loggedUser = my_profile_data.data;

    const animeCollection = await fetchTheUserService<ResponseTypesFor_AnimeBookmark_Section["get_all_list"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.getAllList,
        "GET",
    );
    const collectionData = animeCollection.data;
    const watchingIds =
        collectionData?.filter((item) => item.status === "WATCHING").map((item) => item.external_anime_id) || [];
    const abandonedIds =
        collectionData?.filter((item) => item.status === "ABANDONED").map((item) => item.external_anime_id) || [];
    const plannedIds =
        collectionData?.filter((item) => item.status === "PLANNED").map((item) => item.external_anime_id) || [];
    const completedIds =
        collectionData?.filter((item) => item.status === "COMPLETED").map((item) => item.external_anime_id) || [];
    return (
        <>
            <MyProfileDashboard data={loggedUser} />
            <div className={rea_wrapper_border}>
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

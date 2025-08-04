"use server";
import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { notFound } from "next/navigation";
import { JSX } from "react";
import { Profile_ResponseTypes } from "reanime/user-service/response/response-data-types.js";

type Props = { username: string };
export async function ShowOthersProfile({ username }: Props): Promise<JSX.Element> {
    const base_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
        method: "GET",
        url: `/v1/profile/explore_others_profile/${username}`,
    });

    if (base_profile_data.status_code === 404) {
        return notFound();
    }

    if (!base_profile_data.data) {
        return notFound();
    }
    return (
        <>
            <OnlyShowOthersAvatar profile={base_profile_data.data.profile} />
            <Others_Profile_Dashboard profile={base_profile_data.data.profile} account={base_profile_data.data.account} />
        </>
    );
}

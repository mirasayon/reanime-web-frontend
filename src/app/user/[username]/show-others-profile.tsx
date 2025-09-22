"use server";
import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { notFound } from "next/navigation";
import type { JSX } from "react";

type Props = { username: string };
export async function ShowOthersProfile({ username }: Props): Promise<JSX.Element> {
    const base_profile_data = await UserServiceFetcher<Profile_ResponseTypes.view_other_profiles>({
        method: "GET",
        url: `/v1/profile/explore_others_profile/${username}`,
        ip: undefined,
        agent: undefined,
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


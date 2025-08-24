"use server";
import { Upload_avatar_or_show } from "#/components/avatars/upload_avatar_or_show";
import { My_Profile_Dashboard } from "#/components/users/my-profile";
import { UserServiceFetcher } from "#/integrators/user_service/user-service-fetcher.integrator-util";
import { notFound } from "next/navigation";
import type { Profile_ResponseTypes } from "@reanime/user-service/shared/types/responses/routes/profile.js";
import { MyAccoutDashboard } from "#/components/profile-dashboard";

type Props = {
    session_token: string | undefined;
    ip: string | undefined;
    agent: string | undefined;
};
export async function ShowMyProfile_Dashboard({ session_token, agent, ip }: Props) {
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
    return (
        <>
            <div>Ваш профиль</div>
            <Upload_avatar_or_show profile={my_profile_data.data.profile} />
            <My_Profile_Dashboard profile={my_profile_data.data.profile} account={my_profile_data.data.account} />

            <MyAccoutDashboard />
        </>
    );
}

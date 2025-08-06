"use server";
import { Logout_user } from "#/components/auth/log-out";
import { Upload_avatar_or_show } from "#/components/avatars/upload_avatar_or_show";
import { My_Profile_Dashboard } from "#/components/users/my-profile";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { notFound } from "next/navigation";
import { Profile_ResponseTypes } from "@reanime.art/user-service/user-service/response/response-data-types.js";

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
            <Logout_user />
        </>
    );
}

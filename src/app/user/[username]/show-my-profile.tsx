import { Upload_avatar_or_show } from "#/components/avatars/upload_avatar_or_show";
import { My_Profile_Dashboard } from "#/components/users/my-profile";
import { MyAccountDashboard } from "#/components/profile-dashboard";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";

export function ShowMyProfile_Dashboard({ data, userServiceBaseUrl }: { userServiceBaseUrl: string; data: Profile_ResponseTypes.view_my_profile }) {
    return (
        <>
            <div>Ваш профиль</div>
            <Upload_avatar_or_show profile={data.profile} userServiceBaseUrl={userServiceBaseUrl} />
            <My_Profile_Dashboard profile={data.profile} account={data.account} />
            <MyAccountDashboard />
        </>
    );
}

import { Upload_avatar_or_show } from "#/components/avatars/upload_avatar_or_show";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { MainProfileDashboard } from "./strong-dashboard-for-logged-user";

export function MainShowMyProfileDashboard({
    data,
    userServiceBaseUrl,
}: {
    userServiceBaseUrl: string;
    data: Profile_ResponseTypes.view_my_profile;
}) {
    return (
        <>
            <h1 className=" py-2 text-center">Ваш профиль</h1>
            <div className=" flex  border-2 m-2 border-blue-400 ">
                <Upload_avatar_or_show
                    profile={data.profile}
                    userServiceBaseUrl={userServiceBaseUrl}
                />
                <MainProfileDashboard user={data} />
            </div>
        </>
    );
}

import { UploadAvatarOrShowForLoggedAccountComponent } from "#/components/avatars/upload_avatar_or_show";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { MainProfileDashboard } from "./strong-dashboard-for-logged-user";

export function MainShowMyProfileDashboard({
    data,
}: {
    data: ResponseTypesFor_UserProfile_Section["view_my_profile"];
}) {
    return (
        <>
            <h1 className=" py-2 text-center">Ваш профиль</h1>
            <div className=" flex  border-2 m-2 border-blue-400 ">
                <UploadAvatarOrShowForLoggedAccountComponent
                    avatarUrl={
                        data.avatar
                            ? `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/${data.avatar.path_dirname}/${data.avatar.path_filename}`
                            : null
                    }
                    username={data.username}
                />
                <MainProfileDashboard user={data} />
            </div>
        </>
    );
}

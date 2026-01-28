import { UploadAvatarOrShowForLoggedAccountComponent } from "#/components/avatars/upload_avatar_or_show";
import { envClient } from "#/env/env-client";
import { BORDER } from "#/styles/style-constants";
import { endpointsConfig } from "#/user-service-shared-package/endpoints-config";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { MainProfileDashboard } from "./profile-dashboard";

export function MyProfileDashboard({ data }: { data: ResponseTypesFor_UserProfile_Section["view_my_profile"] }) {
    return (
        <div className={BORDER}>
            <h1 className=" py-2 text-center">Ваш профиль</h1>
            <div className=" flex m-2 ">
                <UploadAvatarOrShowForLoggedAccountComponent
                    avatarUrl={
                        data.avatar
                            ? `${envClient.userServiceUrl}/v1${
                                  endpointsConfig.media.baseUrl + endpointsConfig.media.viewAvatarByFs
                              }/${data.avatar.path_dirname}/${data.avatar.path_filename}.webp`
                            : null
                    }
                />
                <MainProfileDashboard user={data} />
            </div>
        </div>
    );
}

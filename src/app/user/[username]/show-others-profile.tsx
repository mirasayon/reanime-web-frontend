import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import type { JSX } from "react";

type Props = {
    data: Profile_ResponseTypes.view_other_profiles;
    userServiceBaseUrl: string;
};
export function ShowOthersProfile({
    data,
    userServiceBaseUrl,
}: Props): JSX.Element {
    return (
        <>
            <h1 className="p-3 text-center">Профиль пользователя</h1>
            <OnlyShowOthersAvatar
                profile={data.profile}
                userServiceBaseUrl={userServiceBaseUrl}
            />
            <Others_Profile_Dashboard
                profile={data.profile}
                account={data.account}
            />
        </>
    );
}

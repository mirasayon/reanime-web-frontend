import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

type Props = {
    data: ResponseTypesFor_UserProfile_Section["view_other_profiles"];
    userServiceBaseUrl: string;
};
export function ShowOthersProfile({ data, userServiceBaseUrl }: Props): React.JSX.Element {
    return (
        <>
            <h1 className="p-3 text-center">Профиль пользователя</h1>
            <OnlyShowOthersAvatar username={data.username} userServiceBaseUrl={userServiceBaseUrl} />
            <Others_Profile_Dashboard data={data} />
        </>
    );
}

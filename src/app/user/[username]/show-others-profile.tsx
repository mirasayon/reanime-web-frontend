import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { OthersProfileComponent } from "#/components/users/others-profile";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

type Props = {
    data: ResponseTypesFor_UserProfile_Section["view_other_profiles"];
};
export function ShowOthersProfile({ data }: Props): React.JSX.Element {
    return (
        <>
            <h1 className="p-3 text-center">Профиль пользователя</h1>
            <OnlyShowOthersAvatar username={data.username} />
            <OthersProfileComponent data={data} />
        </>
    );
}

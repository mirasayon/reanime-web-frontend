import { OnlyShowOthersAvatar } from "#/components/avatars/only-show-avatar";
import { Others_Profile_Dashboard } from "#/components/users/others-profile";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import type { JSX } from "react";

type Props = { data: Profile_ResponseTypes.view_other_profiles; userServiceBaseUrl: string };
export function ShowOthersProfile({ data, userServiceBaseUrl }: Props): JSX.Element {
    return (
        <>
            <OnlyShowOthersAvatar profile={data.profile} userServiceBaseUrl={userServiceBaseUrl} />
            <Others_Profile_Dashboard profile={data.profile} account={data.account} />
        </>
    );
}

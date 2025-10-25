import type { AvatarPicture, Profile } from "&us/orm/client";
import { Avatar, AvatarImage } from "../users/dashboard/common";
export function OnlyShowOthersAvatar({
    profile,
    userServiceBaseUrl,
}: {
    profile: Profile & { avatar: AvatarPicture | null };
    userServiceBaseUrl: string;
}) {
    // const [is_changed, set_changed] = useState<boolean>(false);
    // const [is_hover, set_hover] = useState<boolean>(false);
    const _url = userServiceBaseUrl + "/v1/profile/avatar/view/" + (profile.avatar?.url ?? "--");
    return (
        <div className=" flex">
            {profile.avatar ? (
                <div>
                    <div className=" flex flex-col">
                        <Avatar className="w-28 h-28 shadow-md">
                            <AvatarImage avatar={_url} />
                            {/* <AvatarFallback className="text-lg font-semibold">{profile.nickname?.[0] || "U"}</AvatarFallback> */}
                        </Avatar>
                    </div>
                </div>
            ) : (
                <div>Аватар не найден</div>
            )}
        </div>
    );
}

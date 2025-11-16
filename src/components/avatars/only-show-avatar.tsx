import type { AvatarPicture, Profile } from "#user-service/databases/orm/client.js";
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
        <div className=" flex ">
            {profile.avatar ? (
                <div className=" border-2 m-2 border-blue-400 w-full">
                    <Avatar className="  m-2 h-48 w-48 object-cover ">
                        <AvatarImage avatar={_url} />
                    </Avatar>
                </div>
            ) : (
                <div>Аватар не найден</div>
            )}
        </div>
    );
}

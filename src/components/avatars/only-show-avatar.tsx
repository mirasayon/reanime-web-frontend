import type { Profile } from "@reanime/user-service/databases/orm/client.js";
import { Avatar, AvatarImage } from "../users/dashboard/common";
export function OnlyShowOthersAvatar({ profile }: { profile: Profile }) {
    // const [is_changed, set_changed] = useState<boolean>(false);
    // const [is_hover, set_hover] = useState<boolean>(false);

    return (
        <div className=" flex">
            {profile.avatar_url_hash ? (
                <div>
                    <div className=" flex flex-col">
                        <Avatar className="w-28 h-28 shadow-md">
                            <AvatarImage avatar={profile.avatar_url_hash} />
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

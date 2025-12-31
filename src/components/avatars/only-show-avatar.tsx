import { Avatar, AvatarImage } from "../users/dashboard/common";
import { viewAvatarByUsernameUrl } from "../utilities/common/view-avatar-by-username-url";
export function OnlyShowOthersAvatar({ username }: { username: string }) {
    return (
        <div className=" flex ">
            <div className=" border-2 m-2 border-blue-400 w-full">
                <Avatar className="  m-2 h-48 w-48 object-cover ">
                    <AvatarImage avatar={viewAvatarByUsernameUrl(username)} />
                </Avatar>
            </div>
        </div>
    );
}

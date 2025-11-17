import { Avatar, AvatarImage } from "../users/dashboard/common";
import { DropdownMenuForAvatar } from "./dropdown-menu-for-avatar/menu";

export function ShowAvatarElement({ username, userServiceBaseUrl }: { username: string; userServiceBaseUrl: string }) {
    const url = userServiceBaseUrl + "/v1/profile/avatar/view/" + username;
    return (
        <div className=" flex flex-col">
            <Avatar className="shadow-md">
                <AvatarImage avatar={url} className="  m-2 h-48 w-48 object-cover " />
            </Avatar>
            <DropdownMenuForAvatar currUrl={`/user/${username}`} />
        </div>
    );
}

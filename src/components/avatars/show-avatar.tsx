import { Avatar, AvatarImage } from "../users/dashboard/common";

import { DropdownMenuForAvatar } from "./dropdown-menu-for-avatar/menu";

export function ShowAvatarElement({ username, userServiceBaseUrl }: { username: string; userServiceBaseUrl: string }) {
    const url = userServiceBaseUrl + "/v1/profile/avatar/view/" + username;

    return (
        <div className=" border-2 border-blue-400 w-full">
            <div className=" flex flex-col">
                <DropdownMenuForAvatar currUrl={`/user/${username}`} />
                <Avatar className="shadow-md">
                    <AvatarImage avatar={url} className="p-3 w-36 h-36 shadow-2xl " />
                </Avatar>
            </div>
        </div>
    );
}

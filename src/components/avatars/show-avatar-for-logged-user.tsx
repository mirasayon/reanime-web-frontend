import { Avatar, AvatarImage } from "../users/dashboard/common";
import { AXE } from "#reanime-user-service/axe.js";
import { DropdownMenuForAvatar } from "./dropdown-menu-for-avatar/menu";

export function ShowAvatarElement({ username, userServiceBaseUrl }: { username: string; userServiceBaseUrl: string }) {
    const url = userServiceBaseUrl + "/v1/profile/avatar/view/" + username;
    console.log(AXE(4));
    return (
        <div className=" border-2 m-2 border-blue-400 w-full">
            <div className=" flex flex-col">
                <DropdownMenuForAvatar currUrl={`/user/${username}`} />
                <Avatar className="shadow-md">
                    <AvatarImage avatar={url} className="  m-2 h-48 w-48 object-cover " />
                </Avatar>
            </div>
        </div>
    );
}

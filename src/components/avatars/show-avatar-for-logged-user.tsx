import { Avatar, AvatarImage } from "../users/dashboard/common";
import { DropdownMenuForEditAvatar } from "./dropdown-menu-for-avatar/dashboard-drop-down-avatar-menu-for-header-menu";

export function ShowAvatarElement({ avatarUrl }: { avatarUrl: string }) {
    return (
        <div className=" flex flex-col">
            <Avatar className="shadow-md">
                <AvatarImage avatar={avatarUrl} className="  m-2 h-48 w-48 object-cover " />
            </Avatar>
            <DropdownMenuForEditAvatar />
        </div>
    );
}

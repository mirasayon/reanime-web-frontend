import { Avatar, AvatarImage } from "../users/dashboard/common";
import { AvatarMenuComponent } from "./dropdown-menu-for-avatar/avatar-menu-component";

export function ShowAvatarElement({ avatarUrl }: { avatarUrl: string }) {
    return (
        <div className=" flex flex-col">
            <Avatar className="shadow-md">
                <AvatarImage avatar={avatarUrl} className="  m-2 h-48 w-48 object-cover " />
            </Avatar>
            <AvatarMenuComponent />
        </div>
    );
}

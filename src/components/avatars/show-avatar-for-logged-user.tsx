import { Avatar, AvatarImage } from "../users/dashboard/common";
import { DropdownMenuForEditAvatar } from "./dropdown-menu-for-avatar/dashboard-drop-down-avatar-menu-for-header-menu";

export function ShowAvatarElement({
    username,
    hasCustomAvatar,
}: {
    username: string;
    hasCustomAvatar: boolean;
}) {
    const url =
        process.env.NEXT_PUBLIC_USER_SERVICE_URL +
        "/v1/profile/avatar/view/" +
        username;
    return (
        <div className=" flex flex-col">
            <Avatar className="shadow-md">
                <AvatarImage
                    avatar={url}
                    className="  m-2 h-48 w-48 object-cover "
                />
            </Avatar>
            {hasCustomAvatar && <DropdownMenuForEditAvatar />}
        </div>
    );
}

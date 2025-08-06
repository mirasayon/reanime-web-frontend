import { Avatar, AvatarImage } from "../users/dashboard/common";

import { DropdownMenuForAvatar } from "./dropdown-menu-for-avatar/menu";

export function ShowAvatar({ avatar }: { avatar: string }) {
    return (
        <div className=" border-2 border-blue-400 w-full">
            <div className=" flex flex-col">
                <DropdownMenuForAvatar />
                <Avatar className="shadow-md">
                    <AvatarImage avatar={avatar ?? undefined} className="p-3 w-36 h-36 shadow-2xl " />
                </Avatar>
            </div>
        </div>
    );
}

"use client";
import { AvatarDashboardForLoggedInUser } from "./for-logged-users";
import { LoginAndRegisterLinksAtAvatarPlace } from "./for-guests";
import { AvatarOrLoginRegButtonForHeader } from "./avatar-or-login-reg-button-for-header";
import { DropdownMenuShadCN, DropdownMenuContentShadCN, DropdownMenuTriggerShadCN } from "#/shadcn-ui/dropdown-menu";
export function MainDropdownMenuInHeader({ username }: { username?: string }) {
    return (
        <DropdownMenuShadCN>
            <DropdownMenuTriggerShadCN className="outline-none p-1 cursor-pointer">
                <AvatarOrLoginRegButtonForHeader username={username} />
            </DropdownMenuTriggerShadCN>
            <DropdownMenuContentShadCN className=" dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black">
                <div className={`  right-0 top-[70px] dark:bg-slate-800 bg-blue-200 `}>
                    <div className={` flex flex-col `}>
                        <div className={"m-1 p-2"}>
                            {username ? (
                                <AvatarDashboardForLoggedInUser username={username} />
                            ) : (
                                <LoginAndRegisterLinksAtAvatarPlace />
                            )}
                        </div>
                    </div>
                </div>
            </DropdownMenuContentShadCN>
        </DropdownMenuShadCN>
    );
}

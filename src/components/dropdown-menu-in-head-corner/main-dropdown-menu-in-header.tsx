"use client";
import { useState } from "react";
import { AvatarDashboardForLoggedInUser } from "./for-logged-users";
import { LoginAndRegisterLinksAtAvatarPlace } from "./for-guests";
import { DropdownMenuInHeaderEntryPoint } from "./entry-point";
import type {
    Profile,
    Account,
    AvatarPicture,
} from "#user-service/databases/orm/client.js";
export function MainDropdownMenuInHeader({
    profile,
    userServiceBaseUrl,
    avatar,
    account,
}: {
    profile: Profile | null;
    account: Account | null;
    avatar: AvatarPicture | null;
    userServiceBaseUrl: string;
}) {
    const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
    const auth =
        profile && account
            ? {
                  show_name: profile.nickname ?? account.username,
                  avatar: avatar?.url || null,
              }
            : null;
    return (
        <>
            <div className={`relative z-50`}>
                <DropdownMenuInHeaderEntryPoint
                    setterIsOpen={setIsOpenDropdownMenu}
                    isOpen={isOpenDropdownMenu}
                    loggedUser={auth}
                    userServiceBaseUrl={userServiceBaseUrl}
                />

                <div className={!isOpenDropdownMenu ? "w-0 h-0" : ""}>
                    <div
                        className={`absolute right-0 top-[70px] dark:bg-slate-800 bg-blue-200 ${
                            !isOpenDropdownMenu && "h-0 w-0"
                        } `}
                    >
                        <div
                            className={`${
                                !isOpenDropdownMenu && "hidden"
                            } flex flex-col `}
                        >
                            <div className={"m-1 p-2"}>
                                {profile && account ? (
                                    <AvatarDashboardForLoggedInUser
                                        setOpenFunction={setIsOpenDropdownMenu}
                                        username={account.username}
                                    />
                                ) : (
                                    <div
                                        onClick={(e) => {
                                            setIsOpenDropdownMenu(false);
                                        }}
                                    >
                                        <LoginAndRegisterLinksAtAvatarPlace />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

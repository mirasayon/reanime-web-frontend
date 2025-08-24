"use client";
import { useState } from "react";
import type { Profile, Account } from "@reanime/user-service/databases/orm/client.js";
import { Avatar_Dashboard } from "./for-logged-users";
import { Avatar_Login } from "./for-guests";
import { DropdownMenuInHeaderEntryPoint } from "./entry-point";
export function DropdownMenuInHeader({ profile, account }: { profile: Profile | null; account: Account | null }) {
    const [is_open, set_is_open] = useState(false);
    const auth =
        profile && account
            ? {
                  show_name: profile.nickname ?? account.username,
                  avatar: profile.avatar_url_hash,
              }
            : null;
    return (
        <>
            <div className={`relative `}>
                <DropdownMenuInHeaderEntryPoint setterIsOpen={set_is_open} isOpen={is_open} loggedUser={auth} />

                <div className={!is_open ? "w-0 h-0" : ""}>
                    <div className={`absolute right-[0px] top-[70px] dark:bg-slate-800 bg-blue-200 ${!is_open && "h-0 w-0"} `}>
                        <div className={`${is_open ? "" : "hidden"} flex flex-col `}>
                            <div className={"m-1 p-2"}>
                                {profile && account ? <Avatar_Dashboard username={account.username} /> : <Avatar_Login />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

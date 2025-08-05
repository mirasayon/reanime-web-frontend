"use client";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegRegistered } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { Account, Profile } from "reanime/user-service/response/response-data-types.js";
import { AvatarImage } from "../users/dashboard/common";
export function Avatar_slider({ profile, account }: { profile: Profile | null; account: Account | null }) {
    const [is_open, set_is_open] = useState(false);
    return (
        <>
            <div className={`relative `}>
                <div>
                    <button
                        type="button"
                        className={`cursor-pointer p-3 ${is_open && " "}`}
                        onClick={(e) => {
                            e.preventDefault();
                            set_is_open((p) => !p);
                        }}
                    >
                        {" "}
                        {profile ? (
                            <div className="">
                                <AvatarImage className="size-12 rounded-full" avatar={profile.avatar_url_hash} />
                            </div>
                        ) : is_open ? (
                            <MdCancelPresentation size={40} />
                        ) : (
                            <CgProfile size={40} />
                        )}
                    </button>
                </div>

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
function Avatar_Login() {
    const styles = () => `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <Link className={styles()} href="/auth/login">
                <MdOutlineLogin size={40} fill={"white"} />
                <span className="p-2 text-center">Войти</span>
            </Link>

            <Link className={styles()} href="/auth/register">
                <FaRegRegistered size={40} fill={"white"} />

                <span className="p-2 text-center">Зарегистрироваться</span>
            </Link>
        </div>
    );
}

function Avatar_Dashboard({ username }: { username: string }) {
    const styles = () => `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <Link className={styles()} href={`/user/${username}`}>
                <CgProfile size={40} fill={"white"} />
                <span className="p-2 text-center">Профиль</span>
            </Link>

            {/* <Link className={styles()} href="/auth/register">
                <FaRegRegistered size={40} fill={"white"} />

                <span className="p-2 text-center">Зарегистрироваться</span>
            </Link> */}
        </div>
    );
}

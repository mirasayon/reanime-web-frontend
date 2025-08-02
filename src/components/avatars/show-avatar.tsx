"use client";
import { profile } from "console";
import { Avatar, AvatarImage, AvatarFallback } from "../users/my-profile";
import { useState } from "react";
import { DeleteAvatar } from "#/actions/media/avatar-delete";
import { Logger } from "reanime/logger/chalk.js";
import delay from "delay";
import { useRouter } from "next/navigation";

export function ShowAvatar({ avatar }: { avatar: string }) {
    const [clientErrors, setclientErrors] = useState<string[]>([]);

    const _router = useRouter();
    async function deleteAvatarHandle(fd: FormData) {
        const res = await DeleteAvatar();
        if (res.errors.length) {
            setclientErrors(() => res.errors);
            return;
        }
        if (res.ok) {
            Logger.gray("DELETED");
            await delay(3000);
            _router.refresh();
        }
    }
    return (
        <div>
            <div className=" flex flex-col">
                <Avatar className="w-28 h-28 shadow-md">
                    <AvatarImage src={avatar ? `https://media-service.reanime.art/storage/avatar/${avatar}` : undefined} />
                    {/* <AvatarFallback className="text-lg font-semibold">{profile.nickname?.[0] || "U"}</AvatarFallback> */}
                </Avatar>
                <form action={deleteAvatarHandle} className=" flex p-2 m-2 ">
                    <button type="submit" className="p-2 bg-red-600 rounded cursor-pointer">
                        Удалить аватар
                    </button>
                </form>
            </div>

            {clientErrors.length > 0 && <span>Ошибка: </span>}
            {clientErrors.length > 0 &&
                clientErrors.map((err, ind) => {
                    return (
                        <span key={`${err + ind}`} className=" text-red-700 dark:text-violet-500">
                            {err}
                        </span>
                    );
                })}
        </div>
    );
}

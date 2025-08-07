"use client";
import { useState } from "react";
import { DeleteAvatar } from "#/actions/media/avatar-delete";
import { useRouter } from "next/navigation";
export function DeleteAvatarForm() {
    const [clientErrors, setclientErrors] = useState<string[]>([]);

    const _router = useRouter();
    async function deleteAvatarHandle(fd: FormData) {
        const res = await DeleteAvatar();
        if (res.errors.length) {
            setclientErrors(() => res.errors);
            return;
        }
        if (res.ok) {
            _router.refresh();
        }
    }
    return (
        <div className=" p-2">
            <div className="p-2 bg-red-600 rounded cursor-pointer">
                <form action={deleteAvatarHandle} className="">
                    <button type="submit" className="cursor-pointer">
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

"use client";
import { LogOutAccount } from "#/actions/auth/log-out-account";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function Logout_user() {
    const [confirm, set_confirm] = useState<boolean>(false);

    const [clientErrors, setclientErrors] = useState<string[]>([]);
    const _router = useRouter();

    async function LogOutAccountHandle(fd: FormData) {
        const res = await LogOutAccount();
        if (res.errors.length) {
            setclientErrors(res.errors);
        }
        // _router.push("/");
    }
    return (
        <div>
            <form action={LogOutAccountHandle}>
                <button
                    type="button"
                    className={`m-2 cursor-pointer p-2 ${confirm ? "bg-blue-500" : "bg-red-500 "} text-black`}
                    onClick={(e) => {
                        e.preventDefault();
                        set_confirm((pr) => !pr);
                    }}
                >
                    {confirm === false ? "Выйти" : "Отмена"}
                </button>
                {confirm && (
                    <button type={"submit"} className={"cursor-pointer m-2 p-2 bg-red-500 text-black"}>
                        Подтвердить
                    </button>
                )}
            </form>
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

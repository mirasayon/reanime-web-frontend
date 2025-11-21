"use client";
import { LogOutAccount } from "#/actions/auth/log-out-account";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
export function Logout_user() {
    const [confirm, set_confirm] = useState<boolean>(false);
    const _router = useRouter();

    const [pending, startTransition] = useTransition();
    const [clientErrors, setClientErrors] = useState<string[]>([]);

    async function LogOutAccountHandle() {
        startTransition(async () => {
            const res = await LogOutAccount();
            if (res.ok) {
                _router.push("/auth/login");
                return;
            }
            setClientErrors(res.errors);
            return;
        });
    }
    return (
        <div>
            <form action={LogOutAccountHandle}>
                <button
                    type="button"
                    className={`m-2 cursor-pointer p-2 ${confirm ? "bg-blue-500" : "bg-red-500 "} text-black dark:text-white`}
                    onClick={(e) => {
                        e.preventDefault();
                        set_confirm((pr) => !pr);
                    }}
                >
                    {!confirm ? "Выйти" : "Отмена"}
                </button>
                {confirm && (
                    <button type={"submit"} className={"cursor-pointer m-2 p-2 bg-red-500 text-black dark:text-white  "}>
                        {pending ? "Загрузка..." : "Подтвердить"}
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

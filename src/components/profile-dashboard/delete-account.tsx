"use client";

import { DeleteAccountPermanently_ServerAction } from "#/actions/account/delete-account";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "#/shadcn-ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteAccountPermanently() {
    const [clientErrors, setclientErrors] = useState<string[]>([]);

    const _router = useRouter();
    async function deleteAvatarHandle(fd: FormData) {
        const res = await DeleteAccountPermanently_ServerAction();
        if (res.errors.length) {
            setclientErrors(() => res.errors);
            return;
        }
        if (res.ok) {
            _router.push("/");
        }
    }
    return (
        <div className=" p-4 ">
            <AlertDialog>
                <div className="p-2 bg-red-600 rounded cursor-pointer">
                    <AlertDialogTrigger className="cursor-pointer">Удалить аккаунт</AlertDialogTrigger>
                </div>
                <AlertDialogContent className=" dark:bg-slate-900  bg-blue-300 dark:text-white text-black">
                    <form action={deleteAvatarHandle} className=" grid p-2 m-2 ">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Это действие невозможно отменить. Это приведёт к безвозвратному удалению вашей учётной записи и ваших данных с наших
                                серверов.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer dark:bg-slate-800 bg-blue-200">Отмена</AlertDialogCancel>

                            <AlertDialogAction type="submit" className="cursor-pointer dark:bg-green-950 border-1 border-blue-200 bg-blue-200">
                                Подтвердить{" "}
                            </AlertDialogAction>
                        </AlertDialogFooter>{" "}
                    </form>
                </AlertDialogContent>
            </AlertDialog>

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


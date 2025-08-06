"use client";
import { useState } from "react";
import { DeleteAvatar } from "#/actions/media/avatar-delete";
import { useRouter } from "next/navigation";
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
} from "#/shadcn-ui/components/ui/alert-dialog";

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
            <AlertDialog>
                <div className="p-2 bg-red-600 rounded cursor-pointer">
                    <AlertDialogTrigger className="cursor-pointer">Удалить аватар</AlertDialogTrigger>
                </div>
                <AlertDialogContent className=" dark:bg-slate-900 bg-blue-300 dark:text-white text-black">
                    <form action={deleteAvatarHandle} className="   p-2 m-2 ">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer dark:bg-slate-800 bg-blue-200">Cancel</AlertDialogCancel>

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

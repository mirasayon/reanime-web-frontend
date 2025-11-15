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
import { useTransition } from "react";
import { useToast } from "../layout/atoms-toasts-components/useToast";

export function DeleteAccountPermanentlyComponent() {
    const [pending, startTransition] = useTransition();
    const { success, error } = useToast();
    const _router = useRouter();
    async function deleteAvatarHandle() {
        startTransition(async () => {
            const res = await DeleteAccountPermanently_ServerAction();
            if (res.ok) {
                success(res.message);
                _router.push("/auth/login");
                return;
            }
            for (const err of res.errors) {
                error(err);
            }
            return;
        });
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

                            <AlertDialogAction type="submit" className="cursor-pointer dark:bg-red-800 border  border-red-200 bg-blue-200">
                                {pending ? "Удаляю..." : "Подтвердить"}
                            </AlertDialogAction>
                        </AlertDialogFooter>{" "}
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

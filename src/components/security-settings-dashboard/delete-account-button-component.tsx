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
import { useGToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";

export function DeleteAccountPermanentlyComponent() {
    const [pending, startTransition] = useTransition();
    const toaster = useGToaster();
    const _router = useRouter();
    async function deleteAvatarHandle() {
        startTransition(async () => {
            return serverActionsResponsesProcessorFromClientEnvironment({
                success: toaster.success,
                res: await DeleteAccountPermanently_ServerAction(),
                error: toaster.error,
                onSuccessFunction: () => {
                    _router.push("/auth/login");
                },
            });
        });
    }
    return (
        <AlertDialog>
            <div className="p-2 bg-red-600 rounded cursor-pointer">
                <AlertDialogTrigger className="cursor-pointer">
                    Удалить аккаунт
                </AlertDialogTrigger>
            </div>
            <AlertDialogContent className=" dark:bg-slate-900  bg-blue-300 dark:text-white text-black">
                <form action={deleteAvatarHandle} className=" grid p-2 m-2 ">
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Вы абсолютно уверены?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Это действие невозможно отменить. Это приведёт к
                            безвозвратному удалению вашей учётной записи и ваших
                            данных с наших серверов.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer dark:bg-slate-800 bg-blue-200">
                            Отмена
                        </AlertDialogCancel>

                        <AlertDialogAction
                            type="submit"
                            className="cursor-pointer dark:bg-red-800 border  border-red-200 bg-blue-200"
                        >
                            {pending ? "Удаляю..." : "Подтвердить"}
                        </AlertDialogAction>
                    </AlertDialogFooter>{" "}
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}

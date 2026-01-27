"use client";
import { deleteAccount_ServerAction } from "#/actions/account/delete-account";
import {
    AlertDialog,
    AlertDialogActionShadCN,
    AlertDialogCancelShadCN,
    AlertDialogContentShadCN,
    AlertDialogDescriptionShadCN,
    AlertDialogFooterShadCN,
    AlertDialogHeaderShadCN,
    AlertDialogTitleShadCN,
    AlertDialogTriggerShadCN,
} from "#/shadcn-ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";

export function DeleteAccountPermanentlyComponent() {
    const [pending, startTransition] = useTransition();
    const toaster = useToaster();
    const _router = useRouter();
    async function onSubmitHandle() {
        startTransition(async () => {
            return serverActionHandlerOnClient({
                success: toaster.success,
                res: await deleteAccount_ServerAction(),
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
                <AlertDialogTriggerShadCN className="cursor-pointer">Удалить аккаунт</AlertDialogTriggerShadCN>
            </div>
            <AlertDialogContentShadCN className=" dark:bg-slate-900  bg-blue-300 dark:text-white text-black">
                <form action={onSubmitHandle} className=" grid p-2 m-2 ">
                    <AlertDialogHeaderShadCN>
                        <AlertDialogTitleShadCN>Вы абсолютно уверены?</AlertDialogTitleShadCN>
                        <AlertDialogDescriptionShadCN>
                            Это действие невозможно отменить. Это приведёт к безвозвратному удалению вашей учётной
                            записи и ваших данных с наших серверов.
                        </AlertDialogDescriptionShadCN>
                    </AlertDialogHeaderShadCN>
                    <AlertDialogFooterShadCN>
                        <AlertDialogCancelShadCN className="cursor-pointer dark:bg-slate-800 bg-blue-200">
                            Отмена
                        </AlertDialogCancelShadCN>

                        <AlertDialogActionShadCN
                            type="submit"
                            className="cursor-pointer dark:bg-red-800 border  border-red-200 bg-blue-200"
                        >
                            {pending ? "Удаляю..." : "Подтвердить"}
                        </AlertDialogActionShadCN>
                    </AlertDialogFooterShadCN>{" "}
                </form>
            </AlertDialogContentShadCN>
        </AlertDialog>
    );
}

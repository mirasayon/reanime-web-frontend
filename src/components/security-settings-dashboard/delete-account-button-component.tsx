"use client";
import { deleteAccountServerAction } from "#/actions/account/delete-account";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
import {
    DASHBOARD_LINKS_STYLE,
    DASHBOARD_LINKS_STYLE_RED_BORDER,
} from "../dropdown-menu-in-head-corner/for-logged-users";
export function DeleteAccountPermanentlyComponent() {
    const [openDialog, setOpenDialog] = useState(false);
    const [pending, startTransition] = useTransition();
    const toaster = useToaster();
    const router = useRouter();
    async function onSubmitHandle() {
        startTransition(async () => {
            return serverActionHandlerOnClient({
                success: toaster.success,
                res: await deleteAccountServerAction(),
                onSuccessFunction: () => router.push("/auth/login"),
            });
        });
    }
    return (
        <div className=" flex flex-col">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setOpenDialog((pv) => !pv);
                }}
                className="p-2 text-start border-red-600 border-2 hover:bg-red-500/50 rounded cursor-pointer"
            >
                Удалить аккаунт
            </button>
            {openDialog && (
                <div className="p-3 w-max dark:bg-slate-900  bg-blue-300 dark:text-white text-black">
                    <form action={onSubmitHandle} className=" grid p-2 m-2 ">
                        <div className=" header">
                            <div className=" py-2 text-lg">Вы абсолютно уверены?</div>
                            <div className="">
                                Это действие <strong>невозможно отменить</strong>. Это приведёт к безвозвратному
                                удалению вашей учётной записи и ваших данных с наших серверов.
                            </div>
                        </div>
                        <div className=" py-4 flex flex-row gap-6">
                            <button
                                type="reset"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenDialog(false);
                                }}
                                className={DASHBOARD_LINKS_STYLE + "w-max"}
                            >
                                Отмена
                            </button>

                            <button type="submit" className={DASHBOARD_LINKS_STYLE_RED_BORDER + "w-max"}>
                                {pending ? "Удаляю..." : "Подтвердить"}
                            </button>
                        </div>{" "}
                    </form>
                </div>
            )}
        </div>
    );
}

"use client";
import { LogOutAccount_ServerAction } from "#/actions/auth/log-out-account-server-action";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { useGToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import { styles5465 } from "../dropdown-menu-in-head-corner/for-logged-users";
export function LogoutUserAtHeaderComponent() {
    const [confirm, set_confirm] = useState<boolean>(false);
    const toaster = useGToaster();

    const [pending, startTransition] = useTransition();

    function LogOutAccountHandle(e: FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            e.preventDefault();
            const res = await LogOutAccount_ServerAction();
            return serverActionsResponsesProcessorFromClientEnvironment({
                res,
                error: toaster.error,
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                },
            });
        });
    }
    return (
        <form onSubmit={LogOutAccountHandle}>
            <button
                type="button"
                className={styles5465}
                onClick={(e) => {
                    e.preventDefault();
                    set_confirm((pr) => !pr);
                }}
            >
                {!confirm ? "Выйти" : "Отмена"}
            </button>

            <button
                hidden={!confirm}
                type={"submit"}
                className={
                    "cursor-pointer m-1 p-1 bg-red-500 dark:bg-red-700 hover:bg-red-700/80 text-black dark:text-white  "
                }
            >
                {pending ? "Загрузка..." : "Подтвердить"}
            </button>
        </form>
    );
}

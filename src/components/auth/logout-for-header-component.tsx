"use client";
import { LogOutAccount_ServerAction } from "#/actions/auth/log-out-account-server-action";
import { useState, useTransition, type SubmitEvent } from "react";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
import {
    DASHBOARD_LINKS_STYLE,
    DASHBOARD_LINKS_STYLE_RED_BORDER,
} from "../dropdown-menu-in-head-corner/for-logged-users";
export function LogoutForHeaderComponent() {
    const [confirm, set_confirm] = useState<boolean>(false);
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();
    function LogOutAccountHandle(e: SubmitEvent<HTMLFormElement>) {
        startTransition(async () => {
            e.preventDefault();
            const res = await LogOutAccount_ServerAction();
            return serverActionHandlerOnClient({
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
                className={DASHBOARD_LINKS_STYLE}
                onClick={(e) => {
                    e.preventDefault();
                    set_confirm((pr) => !pr);
                }}
            >
                {confirm ? "Отмена" : "Выйти"}
            </button>

            {confirm && (
                <button type={"submit"} className={DASHBOARD_LINKS_STYLE_RED_BORDER}>
                    {pending ? "Загрузка..." : "Подтвердить"}
                </button>
            )}
        </form>
    );
}

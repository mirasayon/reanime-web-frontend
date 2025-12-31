"use client";
import { LogOutAccount_ServerAction } from "#/actions/auth/log-out-account-server-action";
import { useTransition, type FormEvent } from "react";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { LogOut } from "lucide-react";
import { handleSaResponseForClient } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
export function LogoutBtnForProfileDashboard() {
    const [pending, startTransition] = useTransition();
    const toaster = useToaster();
    function LogOutAccountHandle(e: FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            e.preventDefault();
            return handleSaResponseForClient({
                res: await LogOutAccount_ServerAction(),
                error: toaster.error,
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                },
            });
        });
    }
    return (
        <div className="dark:text-white text-white">
            <form onSubmit={LogOutAccountHandle}>
                <button
                    type={"submit"}
                    disabled={pending}
                    className={
                        "rounded-md bg-red-600  dark:bg-red-600 py-2 px-3 cursor-pointer flex items-center gap-2"
                    }
                >
                    <LogOut size={16} />
                    {pending ? "Загрузка..." : "Выйти"}
                </button>
            </form>{" "}
        </div>
    );
}

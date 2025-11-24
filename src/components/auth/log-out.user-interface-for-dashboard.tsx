"use client";
import { LogOutAccount_ServerAction } from "#/actions/auth/log-out-account";
import { useRouter } from "next/navigation";
import { useTransition, type FormEvent } from "react";
import { useToast } from "../layout/atoms-toasts-components/useToast";
import { LogOut } from "lucide-react";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
export function Logout_userForDashboard() {
    const [pending, startTransition] = useTransition();
    const toaster = useToast();
    const _router = useRouter();

    function LogOutAccountHandle(e: FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            e.preventDefault();
            return serverActionsResponsesProcessorFromClientEnvironment({
                res: await LogOutAccount_ServerAction(),
                error: toaster.error,
                onSuccessFunction: () => {
                    _router.refresh();
                },
            });
        });
    }
    return (
        <div className="  text-white">
            <form onSubmit={LogOutAccountHandle}>
                <button
                    type={"submit"}
                    disabled={pending}
                    className={
                        "rounded-lg bg-red-600 py-2 px-3 cursor-pointer  flex items-center gap-2 text-black dark:text-white"
                    }
                >
                    <LogOut size={16} />
                    {pending ? "Загрузка..." : "Выйти"}
                </button>
            </form>{" "}
        </div>
    );
}

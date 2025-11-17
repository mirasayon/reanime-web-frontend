"use client";
import { LogOutAccount } from "#/actions/auth/log-out-account";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useToast } from "../layout/atoms-toasts-components/useToast";
import { LogOut } from "lucide-react";
export function Logout_userForDashboard() {
    const [pending, startTransition] = useTransition();
    const { error, success } = useToast();
    const _router = useRouter();

    async function LogOutAccountHandle(fd: FormData) {
        startTransition(async () => {
            const res = await LogOutAccount();
            if (res.errors.length) {
                for (const err of res.errors) {
                    error(err);
                }
                return;
            }
            success("Успешно вышли из аккаунта");
            _router.push("/");
        });
    }
    return (
        <div className="  text-white">
            <form action={LogOutAccountHandle}>
                <button
                    type={"submit"}
                    className={"rounded-lg bg-red-600 py-2 px-3 cursor-pointer  flex items-center gap-2 text-black dark:text-white"}
                >
                    <LogOut size={16} />
                    {pending ? "Загрузка..." : "Выйти"}
                </button>
            </form>{" "}
        </div>
    );
}

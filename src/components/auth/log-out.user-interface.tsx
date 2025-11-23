"use client";
import { LogOutAccount } from "#/actions/auth/log-out-account";
import { useRouter } from "next/navigation";
import {
    useState,
    useTransition,
    type Dispatch,
    type FormEvent,
    type SetStateAction,
} from "react";
import { useToast } from "../layout/atoms-toasts-components/useToast";
export function LogoutUserAtHeaderComponent({
    setOpenFunction,
}: {
    setOpenFunction: Dispatch<SetStateAction<boolean>>;
}) {
    const [confirm, set_confirm] = useState<boolean>(false);
    const _router = useRouter();
    const { error, success } = useToast();

    const [pending, startTransition] = useTransition();

    function LogOutAccountHandle(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setOpenFunction(false);
        startTransition(async () => {
            const res = await LogOutAccount();
            if (res.ok) {
                success(res.msg);
                _router.refresh();
                return;
            }
            for (const err of res.errors) {
                error(err);
            }
            return;
        });
    }
    return (
        <div>
            <form onSubmit={LogOutAccountHandle}>
                <button
                    type="button"
                    className={`m-2 cursor-pointer p-2 ${
                        confirm ? "bg-blue-500" : "bg-red-500 "
                    } text-black dark:text-white`}
                    onClick={(e) => {
                        e.preventDefault();
                        set_confirm((pr) => !pr);
                    }}
                >
                    {!confirm ? "Выйти" : "Отмена"}
                </button>
                {confirm && (
                    <button
                        type={"submit"}
                        className={
                            "cursor-pointer m-2 p-2 bg-red-500 text-black dark:text-white  "
                        }
                    >
                        {pending ? "Загрузка..." : "Подтвердить"}
                    </button>
                )}
            </form>
        </div>
    );
}

import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { FormEvent } from "react";

export function FormWrapperForFormInputsForAuthForms({
    children,
    onSubmit,
    register,
    removeFormLabel = false,
    login,
}: {
    login?: boolean;
    removeFormLabel?: boolean;
    register?: boolean;
    onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    children: React.ReactNode[];
}) {
    return (
        <div className="justify-center items-center ">
            <div className=" p-2 items-center flex w-full justify-center">
                {login && (
                    <Linker
                        href="/auth/register"
                        className=" items-center text-center  flex"
                    >
                        или Зарегистрироваться
                    </Linker>
                )}

                {register && (
                    <Linker href="/auth/login" linkType="internal">
                        или Войти в существующий аккаунт
                    </Linker>
                )}
            </div>

            <form
                onSubmit={onSubmit}
                className="dark:bg-slate-900/70 bg-slate-300 rounded p-4 flex gap-4 flex-col m-4 "
                noValidate
            >
                {!removeFormLabel && (
                    <div
                        className={`w-full dark:text-slate-300 text-slate-800 font-mono font-bold flex-col flex items-center`}
                    >
                        Добро пожаловать!
                    </div>
                )}
                {...children}
            </form>
        </div>
    );
}

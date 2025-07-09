"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
// import { get_existed_user } from "#server/auth/get_existed_user";
import { Adaptive_errors_container, Analog_purpose, Login_input, Password_input } from "./reusable";
import { ServiceInfo } from "#/components/info/service";
export function Login_Component({
    is_dark,
    redirect_url = "/me",
}: {
    redirect_url?: string;
    is_dark: boolean;
}) {
    const [is_incorrect_password, set_is_incorrect_password] = useState<boolean>(false);
    const [is_no_user_found, set_is_no_user_found] = useState<boolean>(false);
    async function Action_handler(fd: FormData) {
        const login = fd.get("login") as string;
        const password = fd.get("password") as string;
        const user = await get_existed_user({
            username: login,
            password: password,
        });
        if (user === "no_user_found") {
            return set_is_no_user_found((pr) => true);
        }
        set_is_no_user_found((pr) => false);
        if (user === "incorrect_password") {
            return set_is_incorrect_password((pr) => true);
        }
        set_is_incorrect_password((pr) => false);
        if (user) {
            return redirect(redirect_url);
        }
    }

    return (
        <>
            <div className="p-10 flex-row justify-evenly flex ">
                <Analog_purpose purpose="register" />
                <form
                    action={Action_handler}
                    className="border-4 border-blue-500/50 rounded-lg p-8 flex text-xl flex-col m-4 "
                >
                    <div
                        className={`w-full ${
                            is_dark ? "text-slate-300 " : "text-slate-800 "
                        }font-mono font-bold flex-col flex items-center`}
                    >
                        С возращением!
                    </div>
                    <label htmlFor="login" className="text-slate-500">
                        Ваш логин
                    </label>
                    <Login_input input_id="login" />
                    <label htmlFor="password" className="text-slate-500">
                        Введите пароль
                    </label>
                    <Password_input input_id="password" />
                    <Adaptive_errors_container
                        errors={[
                            {
                                activation: is_incorrect_password || is_no_user_found,
                                message: "Неверный логин или пароль",
                            },
                        ]}
                    />
                    <button
                        className="p-2 m-1 mt-3 rounded-lg border-4 border-blue-500/50  cursor-pointer hover:bg-blue-500"
                        type="submit"
                    >
                        Войти
                    </button>
                </form>
            </div>
            ;
        </>
    );
}

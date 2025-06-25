"use client";
import type { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { create_new_user } from "#server/auth/create_new_user";
import { Utils } from "#/utils/functions";
import { rea_wrapper_border } from "#/styles/provider";
import {
    Adaptive_errors_container,
    Adaptive_submit_button,
    Analog_purpose,
    Login_input,
    Password_input,
    Text_input,
} from "./reusable";
export function Register_Component({ is_dark }: { is_dark: boolean }): JSX.Element {
    const [is_matching, set_is_not_matcing] = useState<boolean>(false);
    const [first_char_is_not_valid, setfcharIsnotvalid] = useState<boolean>(false);
    const [is_owned_login, set_is_owned_login] = useState<boolean>(false);
    const [is_not_valid_login, set_not_valid_login] = useState<boolean>(false);

    async function Action_handler(fd: FormData) {
        const login = fd.get("login") as string;
        const cfpassword = fd.get("cfpassword") as string;
        const password = fd.get("password") as string;
        const name = fd.get("name") as string;

        if (Utils.hasNumberInFirstChar(login)) {
            return setfcharIsnotvalid((pr) => true);
        }
        setfcharIsnotvalid((pr) => false);

        if (!Utils.has_only_latins_and_numbers(login)) {
            return set_not_valid_login((pr) => true);
        }
        set_not_valid_login((pr) => false);

        if (cfpassword !== password) {
            return set_is_not_matcing((pr) => true);
        }
        set_is_not_matcing((pr) => false);

        const created_new_user: User | "owned" = await create_new_user({
            username: login,
            password: password,
            name: name,
        });
        if (created_new_user === "owned") {
            return set_is_owned_login((pr) => true);
        }
        set_is_owned_login((pr) => false);
        return redirect("/me");
    }
    return (
        <div className={" p-10  flex-row justify-evenly flex max-lg:grid"}>
            <Analog_purpose purpose="login" />
            <form
                action={Action_handler}
                className={` ${rea_wrapper_border} rounded-lg p-4 flex text-xl flex-col m-4 `}
            >
                <h1
                    className={`w-full font-bold flex-col ${is_dark ? "text-slate-300 " : "text-slate-800 "} flex items-center`}
                >
                    Добро пожаловать!
                </h1>
                <label htmlFor="name" className="text-slate-500">
                    Ваше имя или ник
                </label>
                <Text_input max={20} min={2} required={true} input_id="name" />

                <label htmlFor="login" className="text-slate-500">
                    Ваш логин
                </label>
                <Login_input input_id={"login"} />
                <Adaptive_errors_container
                    is_dark={is_dark}
                    errors={[
                        {
                            activation: first_char_is_not_valid,
                            message: "Первый символ логина должна быть буква",
                        },
                        {
                            activation: is_owned_login,
                            message: "Такой логин уже занят",
                        },
                        {
                            activation: is_not_valid_login,
                            message: "Логин должен быть только из латинских букв и цифр",
                        },
                        {
                            activation: is_matching,
                            message: "Пароли не совпадают",
                        },
                    ]}
                />
                <label htmlFor="password" className="text-slate-500">
                    Придумайте пароль (от 8 до 70 символов)
                </label>
                <Password_input input_id="password" />
                <label htmlFor="cfpassword" className="text-slate-500">
                    Подтвердите пароль
                </label>
                <Password_input input_id="cfpassword" />
                <Adaptive_submit_button purpose="register" />
            </form>
        </div>
    );
}

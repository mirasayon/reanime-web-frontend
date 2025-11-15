"use client";
import { loginAction } from "#/actions/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { authentication_schemas, type dto } from "&us/validators/authentication.validator.routes";
import { InputLoginForAuthForm } from "../components-jsx-for-auth-forms/login-input";
import { InputPasswordForAuthForm } from "../components-jsx-for-auth-forms/password-input";
export function Login_Component() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors: clientErrors },
    } = useForm<dto.login_via_username>({
        resolver: zodResolver(authentication_schemas.login_via_username),
        mode: "onBlur",
    });
    const [pending, startTransition] = useTransition();
    const [serverErrors, setServerErrors] = useState<string[]>();

    const onSubmit = handleSubmit(((data) => {
        setServerErrors([]);
        startTransition(async () => {
            const result = await loginAction(data);
            if (typeof result === "object") {
                setServerErrors(result);
            }
        });
    }) as SubmitHandler<dto.login_via_username>);
    return (
        <div className="p-10 flex-row justify-evenly flex ">
            <form onSubmit={onSubmit} className="w-2xl border-4 border-blue-500/50 rounded-lg p-8 flex text-xl flex-col m-4 " noValidate>
                <div className={`w-full dark:text-slate-300 text-slate-800 font-mono font-bold flex-col flex items-center`}>С возращением!</div>
                <InputLoginForAuthForm inputId="username" fieldError={clientErrors.username} props={register("username", { required: true })} />
                <InputPasswordForAuthForm inputId="password" fieldError={clientErrors.password} props={register("password", { required: true })} />
                {serverErrors?.map((msg, i) => (
                    <div key={i} className=" dark:text-red-500 text-red-800">
                        {msg}
                    </div>
                ))}
                <button className="p-2 m-1 mt-3 rounded-lg border-4 border-blue-500/50  cursor-pointer hover:bg-blue-500" type="submit">
                    {pending ? "Загрузка..." : "Войти"}
                </button>
            </form>
        </div>
    );
}

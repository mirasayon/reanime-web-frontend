"use client";
import { registerForm_S_A } from "#/actions/auth/register";
import { authentication_schemas, type dto } from "#user-service/shared/validators/authentication.validator.routes.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { InputLoginForAuthForm } from "../components-jsx-for-auth-forms/login-input";
import { UserNicknameInputForAuthForm } from "../components-jsx-for-auth-forms/nickname-input";
import { InputPasswordForAuthForm } from "../components-jsx-for-auth-forms/password-input";
import { useRouter } from "next/navigation";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import { Linker } from "#/components/utilities/common/linker-utility-component";
export function Register_Component() {
    const { error, info, push, success } = useToast();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors: clientErrors },
    } = useForm<dto.registration>({
        resolver: zodResolver(authentication_schemas.registration),
        mode: "onBlur",
    });

    const [pending, startTransition] = useTransition();
    const [serverErrors, setServerErrors] = useState<string[]>();

    const onSubmit = handleSubmit(((data) => {
        startTransition(async () => {
            setServerErrors([]);
            const result = await registerForm_S_A(data);
            if (result.ok) {
                success(result.msg);
                router.push("/user/" + data.username);
                return;
            }
            setServerErrors(result.errors);
            return;
        });
    }) as SubmitHandler<dto.registration>);
    return (
        <div className="p-10 flex-col justify-center items-center flex ">
            <Linker href="/auth/login" linkType="internal">
                или Войти в существующий аккаунт
            </Linker>
            <form onSubmit={onSubmit} className="w-2xl border-4 border-blue-500/50 rounded-lg p-8 flex text-xl flex-col m-4 " noValidate>
                <div className={`w-full dark:text-slate-300 text-slate-800 font-mono font-bold flex-col flex items-center`}>Добро пожаловать!</div>
                <UserNicknameInputForAuthForm
                    inputId="nickname"
                    fieldError={clientErrors.nickname}
                    props={register("nickname", { required: true })}
                />
                <InputLoginForAuthForm inputId="username" fieldError={clientErrors.username} props={register("username", { required: true })} />
                <InputPasswordForAuthForm inputId="password" fieldError={clientErrors.password} props={register("password", { required: true })} />
                <InputPasswordForAuthForm
                    propLabel="Повторите пароль"
                    inputId="password_repeat"
                    fieldError={clientErrors.password_repeat}
                    props={register("password_repeat", { required: true })}
                />
                {serverErrors?.map((msg, i) => (
                    <p key={i} className=" dark:text-red-600 text-red-800">
                        {msg}
                    </p>
                ))}

                <button className="p-2 m-1 mt-3 rounded-lg border-4 border-blue-500/50  cursor-pointer hover:bg-blue-500" type="submit">
                    {pending ? "Загрузка..." : "Зарегистрироваться"}
                </button>
            </form>
        </div>
    );
}

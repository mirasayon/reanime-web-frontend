"use client";
import { registerNewUser_ServerAction } from "#/actions/auth/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { InputLoginForAuthForm } from "../components-jsx-for-auth-forms/login-input";
import { UserNicknameInputForAuthForm } from "../components-jsx-for-auth-forms/nickname-input";
import { InputPasswordForAuthForm } from "../components-jsx-for-auth-forms/password-input";
import { useRouter } from "next/navigation";
import { useGToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { SubmitButtonForAuthForms } from "../components-jsx-for-auth-forms/submit-button-for-auth-forms";
import { FormWrapperForFormInputsForAuthForms } from "../components-jsx-for-auth-forms/form-wrapper-for-inputs-for-auth-forms";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import {
    authenticationSectionSchemas,
    type AuthenticationSectionValidatorSchemaType,
} from "#user-service/request-validator-for-all.routes.js";
export function Register_Component() {
    const toaster = useGToaster();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors: clientErrors },
    } = useForm<AuthenticationSectionValidatorSchemaType["registration"]>({
        resolver: zodResolver(authenticationSectionSchemas.registration),
        mode: "onSubmit",
    });
    const [pending, startTransition] = useTransition();
    const [serverErrors, setServerErrors] = useState<string[]>();

    const onSubmit = handleSubmit(((data) => {
        startTransition(async () => {
            setServerErrors([]);
            return serverActionsResponsesProcessorFromClientEnvironment({
                res: await registerNewUser_ServerAction(data),
                onFailFunction: (errors) => {
                    setServerErrors(errors);
                },
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                    router.push("/user/" + data.username);
                },
                success: toaster.success,
            });
        });
    }) as SubmitHandler<AuthenticationSectionValidatorSchemaType["registration"]>);
    return (
        <FormWrapperForFormInputsForAuthForms register onSubmit={onSubmit}>
            <UserNicknameInputForAuthForm
                inputId="nickname"
                fieldError={clientErrors.nickname}
                props={register("nickname", { required: true })}
            />
            <InputLoginForAuthForm
                inputId="username"
                fieldError={clientErrors.username}
                props={register("username", { required: true })}
            />
            <InputPasswordForAuthForm
                inputId="password"
                fieldError={clientErrors.password}
                props={register("password", { required: true })}
            />
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

            <SubmitButtonForAuthForms pending={pending} text={"Зарегистрироваться"} />
        </FormWrapperForFormInputsForAuthForms>
    );
}

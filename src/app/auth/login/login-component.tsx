"use client";
import { login_ServerAction } from "#/actions/auth/login-server-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, type FormEvent } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { authentication_schemas, type dto } from "#user-service/shared/validators/authentication.validator.routes.js";
import { InputLoginForAuthForm } from "../components-jsx-for-auth-forms/login-input";
import { InputPasswordForAuthForm } from "../components-jsx-for-auth-forms/password-input";
import { useRouter } from "next/navigation";
import { useGToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { SubmitButtonForAuthForms } from "../components-jsx-for-auth-forms/submit-button-for-auth-forms";
import { FormWrapperForFormInputsForAuthForms } from "../components-jsx-for-auth-forms/form-wrapper-for-inputs-for-auth-forms";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
export function MainLoginComponent() {
    const toaster = useGToaster();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors: clientErrors },
    } = useForm<dto.login_via_username>({
        resolver: zodResolver(authentication_schemas.login_via_username),
        mode: "onSubmit",
    });
    const [pending, startTransition] = useTransition();
    const [serverErrors, setServerErrors] = useState<string[]>();

    const onSubmit = handleSubmit(((data, e) => {
        startTransition(async () => {
            e?.preventDefault();
            setServerErrors([]);
            const res = await login_ServerAction(data);
            serverActionsResponsesProcessorFromClientEnvironment({
                success: toaster.success,
                res,
                onFailFunction: (errors) => {
                    setServerErrors(errors);
                },
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                    router.push("/user/" + data.username);
                },
            });
            return;
        });
    }) as SubmitHandler<dto.login_via_username>);
    return (
        <FormWrapperForFormInputsForAuthForms login onSubmit={onSubmit}>
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
            {serverErrors?.map((msg, i) => (
                <div key={i} className="text-wrap dark:text-red-500 text-red-800">
                    <span>{msg}</span>
                </div>
            ))}
            <SubmitButtonForAuthForms pending={pending} text="Войти" />
        </FormWrapperForFormInputsForAuthForms>
    );
}

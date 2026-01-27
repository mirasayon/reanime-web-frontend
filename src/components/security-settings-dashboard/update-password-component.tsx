"use client";
import { FormWrapperForFormInputsForAuthForms } from "#/app/auth/components-jsx-for-auth-forms/form-wrapper-for-inputs-for-auth-forms";
import { InputPasswordForAuthForm } from "#/app/auth/components-jsx-for-auth-forms/password-input";
import { SubmitButtonForAuthForms } from "#/app/auth/components-jsx-for-auth-forms/submit-button-for-auth-forms";
import { useTransition } from "react";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
import { updatePassword_ServerAction } from "#/actions/user-settings/update-password-server-action";
import {
    accountSectionSchemas,
    type AccountSectionValidationSchemaType,
} from "#user-service/request-validator-for-all.routes.ts";

export function UpdatePasswordFormComponent({ username }: { username: string }) {
    const [pending, startTransition] = useTransition();
    const toaster = useToaster();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors: clientErrors },
    } = useForm<AccountSectionValidationSchemaType["update_password"]>({
        resolver: zodResolver(accountSectionSchemas.update_password),
        mode: "onSubmit",
    });

    const onSubmit = handleSubmit(((data, e) => {
        startTransition(async () => {
            e?.preventDefault();
            const res = await updatePassword_ServerAction(data);
            serverActionHandlerOnClient({
                success: toaster.success,
                res,
                error: toaster.error,
                onSuccessFunction: () => {
                    router.push("/user/" + username);
                },
            });
            return;
        });
    }) as SubmitHandler<AccountSectionValidationSchemaType["update_password"]>);
    return (
        <div>
            <FormWrapperForFormInputsForAuthForms onSubmit={onSubmit} removeFormLabel>
                <InputPasswordForAuthForm
                    propLabel="Введите текущий пароль"
                    fieldError={clientErrors.current_password}
                    inputId="current_password"
                    props={register("current_password", { required: true })}
                />
                <InputPasswordForAuthForm
                    propLabel="Введите новый пароль"
                    fieldError={clientErrors.new_password}
                    inputId="new_password"
                    props={register("new_password", { required: true })}
                />
                <InputPasswordForAuthForm
                    propLabel="Подтвердите новый пароль"
                    inputId="repeat_new_password"
                    fieldError={clientErrors.repeat_new_password}
                    props={register("repeat_new_password", { required: true })}
                />
                <SubmitButtonForAuthForms text="Обновить пароль" pending={pending} />
            </FormWrapperForFormInputsForAuthForms>
        </div>
    );
}

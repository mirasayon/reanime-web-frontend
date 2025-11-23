import type { JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelComponentForAuthForms } from "./label-component-for-auth-forms";
import { WrapperForInputFromAuthForms } from "./input-wrapper-for-form-for-auth-forms";

export function UserNicknameInputForAuthForm<R extends string>({
    props,
    inputId,
    fieldError,
}: {
    fieldError: FieldError | undefined;
    inputId: string;
    props: UseFormRegisterReturn<R>;
}): JSX.Element {
    return (
        <>
            <LabelComponentForAuthForms labelText={"Ваш никнейм"} />
            <WrapperForInputFromAuthForms>
                <input
                    className={"p-1  w-full outline-none"}
                    type={"text"}
                    id={inputId}
                    minLength={4}
                    {...props}
                    maxLength={20}
                    required={true}
                />
            </WrapperForInputFromAuthForms>
            {fieldError && (
                <p className=" dark:text-red-500 text-red-800">
                    {fieldError.message}
                </p>
            )}
        </>
    );
}

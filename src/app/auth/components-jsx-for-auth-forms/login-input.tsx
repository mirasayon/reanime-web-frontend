import type { JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelComponentForAuthForms } from "./label-component-for-auth-forms";
import { WrapperForInputFromAuthForms } from "./input-wrapper-for-form-for-auth-forms";

export function InputLoginForAuthForm<R extends string>({
    props,
    inputId,
    fieldError,
}: {
    fieldError: FieldError | undefined;
    inputId: string;
    props: UseFormRegisterReturn<R>;
}): React.JSX.Element {
    return (
        <>
            <LabelComponentForAuthForms labelText={"Ваш логин"} />
            <WrapperForInputFromAuthForms>
                <span className="p-1 dark:text-slate-400 text-slate-800">@</span>
                <input
                    className={"p-1 w-full outline-none"}
                    type={"text"}
                    id={inputId}
                    minLength={4}
                    {...props}
                    maxLength={20}
                    required={true}
                />
            </WrapperForInputFromAuthForms>
            {fieldError && <p className="text-wrap dark:text-red-500 text-red-800">{fieldError.message}</p>}
        </>
    );
}

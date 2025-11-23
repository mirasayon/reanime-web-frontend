"use client";
import { useState, type JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { LabelComponentForAuthForms } from "./label-component-for-auth-forms";
import { WrapperForInputFromAuthForms } from "./input-wrapper-for-form-for-auth-forms";

export function InputPasswordForAuthForm<R extends string>({
    props,
    inputId,
    propLabel = "Введите пароль",
    fieldError,
}: {
    fieldError: FieldError | undefined;
    propLabel?: string;
    props: UseFormRegisterReturn<R>;
    inputId: string;
}): JSX.Element {
    const [is_password_type, set_is_password_type] = useState<boolean>(false);
    return (
        <>
            <LabelComponentForAuthForms labelText={propLabel} />
            <WrapperForInputFromAuthForms>
                <input
                    className="p-1 w-full outline-none rounded-lg "
                    type={is_password_type ? "password" : "text"}
                    minLength={8}
                    maxLength={80}
                    id={inputId}
                    {...props}
                    required={true}
                />
                <button
                    type="button"
                    className="p-1 pr- cursor-pointer"
                    onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                    ) => {
                        e.preventDefault();
                        return set_is_password_type((pre_v) => !pre_v);
                    }}
                >
                    {is_password_type ? <FaEyeSlash /> : <FaRegEye />}
                </button>
            </WrapperForInputFromAuthForms>{" "}
            {fieldError && (
                <div className="text-wrap dark:text-red-500 text-red-800">
                    {fieldError.message}
                </div>
            )}
        </>
    );
}

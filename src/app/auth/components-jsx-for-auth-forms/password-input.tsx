"use client";
import { useState, type JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

export function InputPasswordForAuthForm<R extends string>({
    props,
    fieldError,
}: {
    fieldError: FieldError | undefined;
    props: UseFormRegisterReturn<R>;
}): JSX.Element {
    const [is_password_type, set_is_password_type] = useState<boolean>(false);
    return (
        <div className=" ">
            <label htmlFor="password" className="dark:text-slate-500 text-slate-900">
                Введите пароль
            </label>
            <div className="border-4 flex rounded-lg justify-between border-slate-600">
                <input
                    className="p-2 w-full outline-none rounded-lg "
                    type={is_password_type ? "password" : "text"}
                    minLength={8}
                    maxLength={80}
                    id={"password"}
                    {...props}
                    required={true}
                />
                <button
                    type="button"
                    className="p-2 pr- cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault();
                        return set_is_password_type((pre_v) => !pre_v);
                    }}
                >
                    {" "}
                    {is_password_type ? <FaEyeSlash /> : <FaRegEye />}
                </button>
                {fieldError && <p className=" dark:text-red-500 text-red-800">{fieldError.message}</p>}
            </div>{" "}
        </div>
    );
}

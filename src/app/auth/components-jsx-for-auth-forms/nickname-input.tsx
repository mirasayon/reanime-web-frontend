import type { JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
            <div className=" NICKNAME">
                <label htmlFor={inputId} className="dark:text-slate-500 text-slate-900">
                    Ваш никнейм
                </label>
                <div className={" border-4 w-full  border-slate-600 rounded-lg p-2 flex"}>
                    <input
                        className={"pl-2  w-full outline-none"}
                        type={"text"}
                        id={inputId}
                        minLength={4}
                        {...props}
                        maxLength={20}
                        required={true}
                    />
                </div>
                {fieldError && <p className=" dark:text-red-500 text-red-800">{fieldError.message}</p>}
            </div>
        </>
    );
}

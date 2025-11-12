import type { JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export function InputLoginForAuthForm<R extends string>({
    props,
    fieldError,
}: {
    fieldError: FieldError | undefined;
    props: UseFormRegisterReturn<R>;
}): JSX.Element {
    return (
        <>
            <div className=" LOGIN">
                <label htmlFor="login" className="dark:text-slate-500 text-slate-900">
                    Ваш логин
                </label>
                <div className={" border-4 w-full  border-slate-600 rounded-lg p-2 flex"}>
                    <span className="dark:text-slate-400 text-slate-800">@</span>
                    <input
                        className={"pl-2  w-full outline-none"}
                        type={"text"}
                        id={"login"}
                        minLength={4}
                        {...props}
                        // {...register("username", { required: true })}
                        maxLength={20}
                        required={true}
                    />
                </div>
                {fieldError && <p className=" dark:text-red-500 text-red-800">{fieldError.message}</p>}
                {/* {clientErrors.username && <p className=" dark:text-red-500 text-red-800">{clientErrors.username.message}</p>} */}
            </div>
        </>
    );
}

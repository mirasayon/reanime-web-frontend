import type { JSX } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelComponentForAuthForms } from "./label-component-for-auth-forms";
import { WrapperForInputFromAuthForms } from "./input-wrapper-for-form-for-auth-forms";

export function UserNicknameInputForAuthForm<R extends string>({
    props,
    inputId,
    removeLabel = false,
    previousName,
    fieldError,
    removeWrapper = false,
}: {
    fieldError: FieldError | undefined;
    inputId: string;
    removeWrapper?: boolean;
    removeLabel?: boolean;
    previousName?: string;
    props: UseFormRegisterReturn<R>;
}): React.JSX.Element {
    return (
        <>
            {!removeLabel && <LabelComponentForAuthForms labelText={"Ваш никнейм"} />}
            {removeWrapper && (
                <input
                    className={"p-1  w-full outline-none"}
                    type={"text"}
                    id={inputId}
                    defaultValue={previousName ?? ""}
                    minLength={4}
                    {...props}
                    maxLength={20}
                    required={true}
                />
            )}
            {!removeWrapper && (
                <WrapperForInputFromAuthForms
                    children={
                        <input
                            className={"p-1  w-full outline-none"}
                            type={"text"}
                            id={inputId}
                            defaultValue={previousName ?? ""}
                            minLength={4}
                            {...props}
                            maxLength={20}
                            required={true}
                        />
                    }
                />
            )}
            {fieldError && <p className=" dark:text-red-500 text-red-800">{fieldError.message}</p>}
        </>
    );
}

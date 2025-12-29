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
    const inputJsx = (
        <input
            className={"p-1  w-full outline-none"}
            type={"text"}
            id={inputId}
            {...(previousName ? { defaultValue: previousName } : {})}
            maxLength={20}
            {...props}
        />
    );
    return (
        <>
            {!removeLabel && <LabelComponentForAuthForms labelText={"Ваш никнейм"} />}
            {removeWrapper && inputJsx}
            {!removeWrapper && <WrapperForInputFromAuthForms children={inputJsx} />}
            {fieldError && <p className=" dark:text-red-500 text-red-800">{fieldError.message}</p>}
        </>
    );
}

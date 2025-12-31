"use client";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { updateNickname_ServerAction } from "./actions-profile-for-edits/update-nickname";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { UserNicknameInputForAuthForm } from "#/app/auth/components-jsx-for-auth-forms/nickname-input";
import { profileRouteValidatorSchemas } from "#user-service/request-validator-for-all.routes.ts";
const schema = z.strictObject({ nickname: profileRouteValidatorSchemas.update_name });
type update_name = z.infer<typeof schema>;
export function UpdateProfileNickname({
    previousName,
    setOpenEditorFunction,
}: {
    previousName: string | null;
    setOpenEditorFunction: Dispatch<SetStateAction<boolean>>;
}): React.JSX.Element {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors: clientErrors },
    } = useForm<update_name>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
    });

    const onSubmitHandler = handleSubmit((data, e) => {
        startTransition(async () => {
            e?.preventDefault();
            const res = await updateNickname_ServerAction({
                newNickname: data.nickname,
            });
            serverActionsResponsesProcessorFromClientEnvironment({
                res: res,
                success: toaster.success,
                error: toaster.error,
                onSuccessFunction: () => {
                    setOpenEditorFunction(false);
                    window?.location?.reload?.();
                },
            });
            return;
        });
    });
    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-row bg-slate-950/40 rounded-md border-slate-900  dark:border-slate-400 border-2"
        >
            <UserNicknameInputForAuthForm
                removeWrapper
                removeLabel
                previousName={previousName ?? ""}
                inputId="nickname"
                fieldError={clientErrors.nickname}
                props={register("nickname", { required: true })}
            />
            <button
                type="submit"
                className="cursor-pointer rounded-r-md  bg-green-600/50 hover:bg-green-600/80 text-sm  p-1  "
            >
                {pending ? "Загрузка..." : "Обновить"}
            </button>
        </form>
    );
}

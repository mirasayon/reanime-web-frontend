"use client";
import { DeleteAvatar_ServerAction } from "#/actions/media/avatar-delete";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { useTransition, type FormEvent } from "react";
import { handleSaResponseForClient } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
export function DeleteAvatarForm() {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();
    function deleteAvatarHandle(e: FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            e.preventDefault();
            const res = await DeleteAvatar_ServerAction();
            return handleSaResponseForClient({
                res,
                error: toaster.error,
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                },
            });
        });
    }
    return (
        <form onSubmit={deleteAvatarHandle} className="flex flex-col">
            <button
                type="submit"
                disabled={pending}
                className="p-1 rounded cursor-pointer bg-red-600  active:bg-red-300"
            >
                {pending ? "Загрузка..." : "Удалить аватар"}
            </button>
        </form>
    );
}

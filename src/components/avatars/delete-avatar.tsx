"use client";
import { DeleteAvatar } from "#/actions/media/avatar-delete";
import { useRouter } from "next/navigation";
import { useToast } from "../layout/atoms-toasts-components/useToast";
import { useTransition } from "react";
export function DeleteAvatarForm() {
    const { error, success } = useToast();
    const _router = useRouter();
    const [pending, startTransition] = useTransition();
    async function deleteAvatarHandle() {
        startTransition(async () => {
            const res = await DeleteAvatar();
            if (res.errors.length) {
                for (const err of res.errors) {
                    error(err);
                }
                return;
            }
            if (res.ok) {
                success("Аватарка успешно удалена");
                _router.refresh();
            }
        });
    }
    return (
        <form action={deleteAvatarHandle} className="flex flex-col">
            <button type="submit" disabled={pending} className="p-1 rounded cursor-pointer bg-red-600  active:bg-red-300">
                {pending ? "Загрузка..." : "Удалить аватар"}
            </button>
        </form>
    );
}

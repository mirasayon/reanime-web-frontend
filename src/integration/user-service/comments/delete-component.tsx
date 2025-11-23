"use client";
import { MdDeleteForever } from "react-icons/md";
import { deleteCommentServerAction } from "./actions-for-comments/delete-comment";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";

export function MainDeleteCommentComponent({
    comment_id,
    current_profile,
    animeId,
    setShowOptionsMenu,
}: {
    animeId: number;
    comment_id: string;
    setShowOptionsMenu: Dispatch<SetStateAction<boolean>>;
    current_profile: AuthenticatorType;
}) {
    const { success, error } = useToast();
    const [pending, startTransition] = useTransition();
    async function deleteCommentFormHandler(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        startTransition(async () => {
            setShowOptionsMenu(false);
            const res = await deleteCommentServerAction({
                comment_id,
                current_profile: current_profile,
                animeId: animeId,
            });
            if (!res.ok) {
                for (const err of res.errors) {
                    error(err);
                }
                return;
            }
            success(res.msg);
            return;
        });
    }
    return (
        <div>
            <form
                onSubmit={deleteCommentFormHandler}
                id={"edit_comment_form"}
                className=" hover:bg-red-500/50 active:bg-red-700 dark:bg-slate-800 bg-slate-500 "
            >
                <button
                    type="submit"
                    className="cursor-pointer flex justify-center items-center p-1"
                >
                    <MdDeleteForever size={20} color="red" />
                    <span className="  ">
                        {pending ? "Удаляю..." : "Удалить"}
                    </span>
                </button>
            </form>
        </div>
    );
}

"use client";
import { MdDeleteForever } from "react-icons/md";
import { deleteCommentServerAction } from "./actions-for-comments/delete-comment-server-action";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";

export function MainDeleteCommentComponent({
    comment_id,
    animeId,
    setShowOptionsMenu,
}: {
    animeId: number;
    comment_id: string;
    setShowOptionsMenu: Dispatch<SetStateAction<boolean>>;
}) {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();
    async function deleteCommentFormHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        startTransition(async () => {
            setShowOptionsMenu(false);
            const res = await deleteCommentServerAction(comment_id, animeId);
            serverActionsResponsesProcessorFromClientEnvironment({
                res,
                error: toaster.error,
            });
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
                <button type="submit" className="cursor-pointer flex justify-center items-center p-1">
                    <MdDeleteForever size={20} color="red" />
                    <span className="  ">{pending ? "Удаляю..." : "Удалить"}</span>
                </button>
            </form>
        </div>
    );
}

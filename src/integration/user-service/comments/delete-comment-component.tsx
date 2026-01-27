"use client";
import { MdDeleteForever } from "react-icons/md";
import { deleteCommentServerAction } from "./actions-for-comments/delete-comment-server-action";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
export function DeleteCommentBtn({
    commentId,
    animeId,
    setShowMenuOptions,
}: {
    animeId: number;
    commentId: string;
    setShowMenuOptions: Dispatch<SetStateAction<boolean>>;
}) {
    const [pending, startTransition] = useTransition();
    function deleteCommentFormHandler(event: React.FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            event.preventDefault();
            const res = await deleteCommentServerAction(commentId, animeId);
            return serverActionHandlerOnClient({
                res,
                onSuccessFunction() {
                    setShowMenuOptions(false);
                },
            });
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

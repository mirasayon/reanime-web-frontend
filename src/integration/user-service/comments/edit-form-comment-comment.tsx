"use client";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { useTransition, type Dispatch, type FormEvent, type SetStateAction } from "react";
import { UpdateComment_ServerAction } from "./actions-for-comments/update-comment-by-profile-server-action";
export function MainEditFormCommentComponent({
    comment,
    setIsEditing,
}: {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
}): React.JSX.Element {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();

    function SaveCommentON(event: FormEvent<HTMLFormElement>) {
        startTransition(async (): Promise<void> => {
            event.preventDefault();
            const newText = event.currentTarget.comment_content.value as string;
            if (newText?.length < 5) {
                toaster.error("Минимальная длина комментария - 5 символов");
                return;
            }
            const res = await UpdateComment_ServerAction(newText, comment.id, comment.external_anime_id);
            serverActionsResponsesProcessorFromClientEnvironment({
                res,
                error: toaster.error,
            });
            setIsEditing(false);
            return;
        });
        event.currentTarget.reset();
    }
    return (
        <form
            onSubmit={SaveCommentON}
            id="comment_form"
            className={"dark:bg-slate-800 bg-blue-200 p-2 flex flex-wrap "}
        >
            <div className="w-full">
                <textarea
                    className={`rounded w-full outline-none dark:bg-slate-900 bg-blue-100 min-h-20 p-2`}
                    placeholder="Оставить комментарий"
                    name="comment_content"
                    id="comment_content"
                    required
                    defaultValue={comment.content}
                    maxLength={800}
                />
                <div className=" flex gap-3 py-2 justify-end">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            return setIsEditing(false);
                        }}
                        className={`p-1 border-4 border-transparent dark:bg-slate-500/50  bg-red-200 active:bg-blue-400 hover:bg-slate-500/80 cursor-pointer`}
                    >
                        Отмена
                    </button>
                    <button
                        type="submit"
                        className={`p-1 border-4 border-transparent dark:bg-slate-500/70 bg-slate-200 hover:bg-slate-300 active:bg-blue-400 hover:dark:bg-green-600/50 cursor-pointer`}
                    >
                        {pending ? "Обновляется…" : "Обновить"}
                    </button>
                </div>
            </div>
        </form>
    );
}

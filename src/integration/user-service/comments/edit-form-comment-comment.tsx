"use client";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import {
    useTransition,
    type JSX,
    type FormEvent,
    type Dispatch,
    type SetStateAction,
} from "react";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { UpdateComment_ServerAction } from "./actions-for-comments/edit-update-comment-by-profile";
export function MainEditFormCommentComponent({
    current_user,
    comment,
    setIsEditing,
}: {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    current_user: Exclude<NonNullable<AuthenticatorType>, 500>;
    comment: Comment_ResponseTypes.get_all_for_anime[number];
}): JSX.Element {
    const { success, error, info } = useToast();
    const [pending, startTransition] = useTransition();

    async function SaveCommentON(event: FormEvent<HTMLFormElement>) {
        startTransition(async (): Promise<void> => {
            event.preventDefault();

            try {
                const comment_content = event.currentTarget.comment_content
                    .value as string;
                if (comment_content?.length < 5) {
                    error("Минимальная длина комментария - 5 символов");
                    return;
                }
                const res = await UpdateComment_ServerAction({
                    current_user: current_user,
                    comment: comment,
                    new_comment_content: comment_content,
                });
                if (!res.ok) {
                    for (const _error of res.errors) {
                        error(_error);
                    }
                    return;
                }
                success(res.msg);
                return;
            } catch (err) {
                error(internalErrTxt);
                return;
            } finally {
                setIsEditing(false);
            }
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
                        {pending ? "Обновляю…" : "Обновить"}
                    </button>
                </div>
            </div>
        </form>
    );
}

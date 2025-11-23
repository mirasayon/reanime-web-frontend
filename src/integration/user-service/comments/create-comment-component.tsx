"use client";
import Link from "next/link";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { CreateOneCommentToAnime } from "./actions-for-comments/create-comment-by-profile";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import { useTransition, type JSX, type FormEvent, useState } from "react";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
export function MainCreateCommentComponent({
    profile,
    animeId,
    userServerBaseUrl,
}: {
    userServerBaseUrl: string;
    profile: AuthenticatorType;
    animeId: number;
}): JSX.Element {
    const { success, error, info } = useToast();
    const [iWantToAddComment, setIWantToAddComment] = useState(false);
    const [pending, startTransition] = useTransition();

    if (!profile || profile === 500) {
        return (
            <Linker href="/auth/login">
                Войдите в свой аккаунт чтобы оставлять комментарии
            </Linker>
        );
    }
    async function formOnSubmitHandler(event: FormEvent<HTMLFormElement>) {
        startTransition(async (): Promise<void> => {
            event.preventDefault();
            if (!profile || profile === 500) {
                return;
            }
            try {
                const comment_content = event.currentTarget.comment_content
                    .value as string;
                if (comment_content?.length < 5) {
                    error("Минимальная длина комментария - 5 символов");
                    return;
                }
                const res = await CreateOneCommentToAnime({
                    anime_id: animeId,
                    profile_id: profile.data.profile.id,
                    currPath: `/anime/${animeId}`,
                    current_profile: profile,
                    comment_content: comment_content,
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
                setIWantToAddComment(false);
            }
        });
        event.currentTarget.reset();
    }
    return (
        <form
            onSubmit={formOnSubmitHandler}
            id="comment_form"
            className={"dark:bg-slate-800 bg-blue-200 p-2 flex flex-wrap "}
        >
            <Link
                href={`/user/${profile.data.account.username}`}
                className="flex p-2 flex-row items-center justify-between"
            >
                <img
                    src={
                        profile.data.avatar
                            ? userServerBaseUrl +
                              "/v1/profile/avatar/view/" +
                              profile.data.avatar.url
                            : "/_assets/default-avatars/m.jpg"
                    }
                    alt="user avatar"
                    className="rounded-full object-cover w-[40px] h-[40px]"
                />
            </Link>
            {iWantToAddComment ? (
                <div className="w-full">
                    <textarea
                        className={`rounded w-full outline-none dark:bg-slate-900 bg-blue-100 min-h-20 p-2`}
                        placeholder="Оставить комментарий"
                        name="comment_content"
                        id="comment_content"
                        required
                        maxLength={800}
                    />
                    <div className=" flex gap-3 py-2 justify-end">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                return setIWantToAddComment(false);
                            }}
                            className={`p-1 border-4 border-transparent dark:bg-slate-500/50  bg-red-200 active:bg-blue-400 hover:bg-slate-500/80 cursor-pointer`}
                        >
                            Отмена
                        </button>
                        <button
                            type="submit"
                            className={`p-1 border-4 border-transparent dark:bg-slate-500/70 bg-slate-200 hover:bg-slate-300 active:bg-blue-400 hover:dark:bg-green-600/50 cursor-pointer`}
                        >
                            {pending ? "Сохраняю…" : "Сохранить"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className=" p-2">
                    <button
                        type="button"
                        className={`p-2 py-auto dark:bg-violet-700 bg-violet-200 active:bg-violet-900 dark:active:bg-violet-900 hover:bg-violet-500 dark:hover:bg-violet-600 rounded cursor-pointer`}
                        onClick={(e) => {
                            e.preventDefault();
                            return setIWantToAddComment(true);
                        }}
                    >
                        Добавить комментарий
                    </button>
                </div>
            )}
        </form>
    );
}

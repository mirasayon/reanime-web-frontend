"use client";
import Link from "next/link";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { CreateOneCommentToAnime } from "./actions-for-comments/create-comment-by-profile";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import { useTransition, type JSX, type FormEvent, useState } from "react";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
export function Add_comment_form({
    profile,
    animeId,
    userServerBaseUrl,
}: {
    userServerBaseUrl: string;
    profile: AuthenticatorType | null;
    animeId: number;
}): JSX.Element {
    const { success, error, info } = useToast();
    const [iWantToAddComment, setIWantToAddComment] = useState(false);
    const [pending, startTransition] = useTransition();
    if (!profile) {
        return <Linker href="/auth/login">Войдите в свой аккаунт чтобы оставлять комментарии</Linker>;
    }
    async function SaveCommentON(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!profile) {
            return;
        }
        startTransition(async (): Promise<void> => {
            try {
                const comment_content = event.currentTarget.comment_content.value as string;
                if (comment_content?.length < 5) {
                    error("Минимальная длина комментария - 5 символов");
                    return;
                }
                const res = await CreateOneCommentToAnime({
                    anime_id: animeId,
                    profile_id: profile.profile.profile.id,
                    currPath: `/anime/${animeId}`,
                    current_profile: profile,
                    comment_content,
                });
                if (res !== false) {
                    if (res.errors.length) {
                        for (const _error of res.errors) {
                            error(_error);
                        }
                        return;
                    }
                    success(res.message);
                    return;
                }
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
        <form onSubmit={SaveCommentON} id="comment_form" className={"dark:bg-slate-800 bg-blue-200 p-2 flex flex-wrap "}>
            <Link href={`/user/${profile.profile?.account.username}`} className="flex p-2 flex-row items-center justify-between">
                {profile.profile?.profile?.avatar?.url ? (
                    <img
                        src={userServerBaseUrl + "/v1/profile/avatar/view/" + profile.profile.profile.avatar.url}
                        alt="user avatar"
                        className="rounded-full object-cover w-[40px] h-[40px]"
                    />
                ) : (
                    <>
                        <div className="w-[40px] h-[40px]"></div>
                    </>
                )}
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
                            className={`p-1 border-4 border-transparent dark:bg-green-900/70  bg-blue-200 active:bg-blue-400 hover:dark:bg-green-800 cursor-pointer`}
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

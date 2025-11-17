"use client";
import type React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

export function timeAgoRU(date: Date | string) {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ru,
    });
}
import type { Comment } from "#user-service/databases/orm/client.js";
import Link from "next/link";
import type { JSX } from "react";
/**
 * Компонент: список комментариев для дашборда пользователя
 */
type CommentsFromUserListProps = {
    comments: Omit<Comment, "by_profile_id">[];
};
export function CommentsFromUserList({ comments }: CommentsFromUserListProps): JSX.Element {
    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold leading-tight">Мои комментарии</h1>
            <div className="space-y-4">
                {comments.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-blue-200 p-6 text-center text-gray-600">У вас пока нет комментариев.</div>
                )}
                {comments.map((c) => {
                    // const created = format(new Date(c.created_at), "d MMM yyyy, HH:mm", { locale: ru });
                    const updated = format(new Date(c.updated_at), "d MMM yyyy, HH:mm", { locale: ru });

                    const linkToComment = `/anime/${c.anime_id}#comment-${c.id}`;
                    return (
                        <article
                            key={c.id}
                            id={`comment-${c.id}`}
                            className="text-slate-800 dark:text-slate-200 group relative flex flex-col rounded-2xl border border-blue-200 p-4 gap-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-shadow shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-4 ">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {/* <time className="text-xs" dateTime={new Date(c.created_at).toISOString()}>
                                            Создано: {created}
                                        </time> */}

                                        <span className="text-xs">•</span>

                                        {/* <time className="text-xs " dateTime={new Date(c.updated_at).toISOString()}>
                                            Обновлён: {updated}
                                        </time> */}
                                        <time className="text-xs " dateTime={new Date(c.updated_at).toISOString()}>
                                            Обновлён/создано: {updated}
                                        </time>
                                        <time className="text-sm text-gray-500">{timeAgoRU(new Date(c.updated_at))}</time>

                                        {/* <span
                                            className="ml-2 text-xs px-2 py-1 rounded-full font-medium"
                                            aria-hidden
                                            style={{
                                                background: c.is_visible ? undefined : undefined,
                                            }}
                                        >
                                            <span
                                                className={
                                                    "text-xs px-2 py-1 rounded-full font-medium " +
                                                    (c.is_visible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")
                                                }
                                            >
                                                {c.is_visible ? "Виден" : "Скрыт"}
                                            </span>
                                        </span> */}
                                    </div>

                                    <p className="text-sm whitespace-pre-line">{c.content}</p>

                                    {/* <div className="mt-3 text-xs text-gray-500 flex flex-wrap gap-3">
                                        <span>Аниме ID: {c.anime_id}</span>
                                    </div> */}
                                </div>

                                <div className="flex flex-col items-end gap-2 ml-4">
                                    <Link
                                        href={linkToComment}
                                        scroll={false}
                                        className="inline-flex items-center gap-2 rounded-lg  border-blue-200 dark:border-blue-500 border-2 px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-violet-700/50"
                                        aria-label={`Перейти к комментарию ${c.id}`}
                                    >
                                        Перейти
                                    </Link>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

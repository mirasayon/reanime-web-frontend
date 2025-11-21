"use server";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
import { Add_comment_form } from "./component-create_comment";
import { EditOneCommentOnAnime } from "./edit-one-comment";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../user-service-fetcher.integrator-util";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import type React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import type { Comment } from "#user-service/databases/orm/client.js";
import type { JSX } from "react";
import { calculateAndShowTimeAgo } from "#/utils/time-ago";
import type { UserServiceResponseBodyPattern } from "#user-service/shared/response-patterns/response-json-body-shape.js";
import { createHmac } from "node:crypto";
export async function Comments_section({
    shikimori_id,
    userServerBaseUrl,
    currUrl,
    current_user,
}: {
    current_user: AuthenticatorType | null;
    shikimori_id: number;
    userServerBaseUrl: string;
    currUrl: string;
}): Promise<JSX.Element> {
    if (!current_user || current_user === 500) {
        return <div>Ошибка при загрузке комментариев</div>;
    }
    const all_comments = await mainUserServiceFetcher<Comment_ResponseTypes.get_all_for_anime>({
        agent: current_user?.agent,
        ip: current_user?.ip,
        method: "GET",
        url: `/v1/comment/get/all_comments_for_anime/${shikimori_id}?page=1&limit=20`,
    });
    if (all_comments === 500 || !all_comments.ok || !all_comments?.data) {
        return <div>Ошибка при загрузке комментариев</div>;
    }

    return (
        <section className={rea_wrapper_border}>
            <div className="m-2">
                <div>Комментарии</div>
                <Add_comment_form profile={current_user} animeId={Number(shikimori_id)} userServerBaseUrl={userServerBaseUrl} />
                <div className="flex flex-col">
                    {all_comments.data.length ? (
                        all_comments.data.map((cmt) => {
                            const updated = format(new Date(cmt.updated_at), "d MMM yyyy, HH:mm", { locale: ru });

                            const user = cmt.by_profile;
                            const linkToComment = `comment-${cmt.id}`;
                            const linkToCommentFull = `/anime/${cmt.anime_id}#comment-${cmt.id}`;

                            return (
                                <div key={cmt.id} className="m-2 grid p-2 items-center" id={linkToComment}>
                                    <div className=" flex items-center">
                                        {user?.avatar ? (
                                            <Link className="flex items-center" href={`/user/${user.by_account.username}`}>
                                                <img
                                                    src={userServerBaseUrl + "/v1/profile/avatar/view/" + user.avatar.url}
                                                    alt="user avatar"
                                                    className="rounded-full object-cover w-[50px] h-[50px]"
                                                />
                                            </Link>
                                        ) : (
                                            <>
                                                <div>no avatar</div>
                                            </>
                                        )}
                                        <span className="p-2 font-semibold  "> {user.nickname || user.by_account.username}</span>

                                        {current_user && current_user.data.profile.id === cmt.by_profile_id && (
                                            <div className="relative">
                                                <EditOneCommentOnAnime comment_id={cmt.id} current_profile={current_user} currUrl={currUrl} />
                                            </div>
                                        )}
                                    </div>

                                    <div className=" flex flex-row gap-2 items-center p-2 ">
                                        <time className="text-xs " dateTime={new Date(cmt.updated_at).toISOString()}>
                                            Обновлён/создано: {updated}
                                        </time>
                                        <time className="text-xs text-gray-500">{calculateAndShowTimeAgo(new Date(cmt.updated_at))}</time>
                                    </div>
                                    <div className="grid items-center">
                                        <span className={` p-2 m-2 w-full dark:bg-slate-800 bg-slate-100 `}>{cmt.content}</span>{" "}
                                    </div>
                                    <div className="flex flex-col items-end gap-2 ml-4">
                                        <Link
                                            scroll={false}
                                            href={linkToCommentFull}
                                            className="inline-flex items-center gap-2 rounded-lg  border-blue-200 dark:border-blue-500 border-2 px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-violet-700/50"
                                            aria-label={`Взять ссылку на этот комментарий ${cmt.id}`}
                                        >
                                            🔗
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <div className=" py-4 px-3">Пока нет комментариев...</div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

//{
/* <div className="flex">
									<form action="/" className="p-2">
										<button type="submit">
											{" "}
											<FaArrowUp size={20} />
										</button>
									</form>
									<BoldX className="p-2 text-lg">{item.count}</BoldX>

									<form action="/" className="p-2">
										<button type="submit">
											{" "}
											<FaArrowDown size={20} />
										</button>
									</form>
								</div> */

//}

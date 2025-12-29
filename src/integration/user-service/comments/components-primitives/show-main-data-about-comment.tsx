import { calculateAndShowTimeAgo } from "#/utils/time-ago";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import Link from "next/link";

export function JustShowMainDataAboutComment({
    userServerBaseUrl,
    comment,
}: {
    userServerBaseUrl: string;
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
}) {
    const isEdited = new Date(comment.updated_at).getUTCMinutes() !== new Date(comment.created_at).getUTCMinutes();
    const linkToCommentFull = `/anime/${comment.external_anime_id}#comment-${comment.id}`;
    return (
        <>
            <Link className="flex items-center" href={`/user/${comment.username}`}>
                <img
                    src={userServerBaseUrl + "/v1/media/avatar/view/" + comment.username}
                    alt="user avatar"
                    className="rounded-full object-cover w-[50px] h-[50px]"
                />
            </Link>
            <span className="p-2 font-semibold  "> {comment.nickname || comment.username}</span>
            <span className="p-2 font-semibold text-slate-500  ">@{comment.username}</span>{" "}
            <time className="text-xs p-2 text-center items-center dark:text-gray-400 text-gray-700">
                {calculateAndShowTimeAgo(new Date(comment.created_at))}
            </time>
            <Link
                scroll={false}
                href={linkToCommentFull}
                className="p-2 text-sm  dark:hover:bg-violet-500/50 hover:bg-violet-300/50"
                aria-label={`Взять ссылку на этот комментарий ${comment.id}`}
            >
                🔗
            </Link>
            {isEdited && <span className="p-2 text-slate-500 text-xs">Изменено</span>}
        </>
    );
}

import { calculateAndShowTimeAgo } from "#/utils/time-ago";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import consola from "consola";
import Link from "next/link";

export function JustShowMainDataAboutComment({
    userServerBaseUrl,
    comment,
}: {
    userServerBaseUrl: string;
    comment: Comment_ResponseTypes.get_all_for_anime[number];
}) {
    const isEdited =
        new Date(comment.updated_at).getUTCMinutes() !==
        new Date(comment.created_at).getUTCMinutes();
    const linkToCommentFull = `/anime/${comment.anime_id}#comment-${comment.id}`;
    return (
        <>
            <Link
                className="flex items-center"
                href={`/user/${comment.by_profile.by_account.username}`}
            >
                <img
                    src={
                        comment.by_profile.avatar?.url
                            ? userServerBaseUrl +
                              "/v1/profile/avatar/view/" +
                              comment.by_profile.avatar?.url
                            : "/_assets/default-avatars/m.jpg"
                    }
                    alt="user avatar"
                    className="rounded-full object-cover w-[50px] h-[50px]"
                />
            </Link>
            <span className="p-2 font-semibold  ">
                {" "}
                {comment.by_profile.nickname ||
                    comment.by_profile.by_account.username}
            </span>
            <span className="p-2 font-semibold text-slate-500  ">
                @{comment.by_profile.by_account.username}
            </span>{" "}
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
            {isEdited && (
                <span className="p-2 text-slate-500 text-xs">Изменено</span>
            )}
        </>
    );
}

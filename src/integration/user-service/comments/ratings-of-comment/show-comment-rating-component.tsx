"use client";
import React, { useTransition } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { addLikeToCommentForm_ServerAction } from "../actions-for-comments/add-like-to-comment-server-action";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
export function ShowCommentRatingComponent({
    comment,
    userVote,
    currPath,
    notProcessedAuthData,
}: {
    comment: Comment_ResponseTypes.get_all_for_anime[number];
    userVote?: boolean | null;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): React.JSX.Element {
    const [pending, startTransition] = useTransition();

    let likes = 0;
    let dislikes = 0;

    for (const r of comment.ratings ?? []) {
        if (r?.vote) likes++;
        else dislikes++;
    }

    const score = likes - dislikes;

    const isLiked = userVote === true;
    const isDisliked = userVote === false;

    const handleAddLikeButton = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        startTransition(async () => {
            e.preventDefault();
            const res = await addLikeToCommentForm_ServerAction({
                comment_id: comment.id,
                currPath: currPath,
                notProcessedAuthData: notProcessedAuthData,
            });
        });
    };

    if (!notProcessedAuthData || notProcessedAuthData === 500) {
        <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
            {score}
        </div>;
    }
    // const handleDislike = () => {
    //     startTransition(async () => {
    //         const res = await addVoteToCommentForm_Server_Action(
    //             isDisliked ? null : false,
    //         );
    //     });
    // };

    return (
        <div className="inline-flex items-center gap-2 text-sm select-none">
            {/* Like button */}
            <button
                onClick={handleAddLikeButton}
                aria-pressed={isLiked}
                aria-label="Like comment"
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 ${"cursor-pointer"}`}
            >
                <ThumbsUp
                    className={`w-4 h-4 ${
                        isLiked
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-500"
                    }`}
                />
            </button>
            <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
                {score}
            </div>

            {/* Dislike button */}
            {/* <button
                onClick={handleDislike}
                aria-pressed={isDisliked}
                aria-label="Dislike comment"
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 ${
                    hasUserLogged ? "cursor-pointer" : "cursor-default"
                }`}
            >
                <ThumbsDown
                    className={`w-4 h-4 ${
                        isDisliked ? "text-blue-600" : "text-gray-500"
                    }`}
                />
            </button> */}
        </div>
    );
}

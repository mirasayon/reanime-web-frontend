"use client";
import React, { useTransition } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import {
    addDislikeToCommentForm_ServerAction,
    addLikeToCommentForm_ServerAction,
    deleteDislikeToCommentForm_ServerAction,
    deleteLikeToCommentForm_ServerAction,
} from "../actions-for-comments/add-like-to-comment-server-action";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
export function ShowCommentRatingComponent({
    comment,
    userVote,
    currPath,
    notProcessedAuthData,
}: {
    comment: Comment_ResponseTypes.get_all_for_anime[number];
    userVote: boolean | null;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): React.JSX.Element {
    const { error, info } = useToast();
    const [pending, startTransition] = useTransition();
    let likes = 0;
    let dislikes = 0;
    for (const r of comment.ratings ?? []) {
        if (r.vote === null) {
            continue;
        }
        if (r.vote === true) {
            likes++;
        } else if (r.vote === false) {
            dislikes++;
        }
    }

    const score = likes - dislikes;

    const isLiked = userVote === true;
    const isDisliked = userVote === false;

    if (!notProcessedAuthData || notProcessedAuthData === 500) {
        <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
            {score}
        </div>;
    }

    function handleAddLikeButton(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) {
        if (isLiked) {
            startTransition(async () => {
                e.preventDefault();
                const res = await deleteLikeToCommentForm_ServerAction({
                    comment_id: comment.id,
                    currPath: currPath,
                    notProcessedAuthData: notProcessedAuthData,
                });
                serverActionsResponsesProcessorFromClientEnvironment({
                    error,
                    res,
                });
            });
            return;
        }
        startTransition(async () => {
            e.preventDefault();
            const res = await addLikeToCommentForm_ServerAction({
                comment_id: comment.id,
                currPath: currPath,
                notProcessedAuthData: notProcessedAuthData,
            });
            serverActionsResponsesProcessorFromClientEnvironment({
                error,
                res,
            });
        });
        return;
    }

    function handleDislike(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (isDisliked) {
            startTransition(async () => {
                e.preventDefault();
                const res = await deleteDislikeToCommentForm_ServerAction({
                    comment_id: comment.id,
                    currPath: currPath,
                    notProcessedAuthData: notProcessedAuthData,
                });
                serverActionsResponsesProcessorFromClientEnvironment({
                    error,
                    info,
                    res,
                });
            });
            return;
        }

        startTransition(async () => {
            e.preventDefault();
            const res = await addDislikeToCommentForm_ServerAction({
                comment_id: comment.id,
                currPath: currPath,
                notProcessedAuthData: notProcessedAuthData,
            });
            serverActionsResponsesProcessorFromClientEnvironment({
                error,
                info,
                res,
            });
        });

        return;
    }

    return (
        <div className="inline-flex items-center gap-2 text-sm select-none">
            <button
                disabled={pending}
                onClick={handleAddLikeButton}
                aria-pressed={isLiked}
                aria-label="Like comment"
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 ${"cursor-pointer"}`}
            >
                <ThumbsUp
                    className={`w-4 h-4 ${
                        isLiked
                            ? "dark:text-blue-600 text-blue-700 "
                            : "text-gray-500"
                    }`}
                />
            </button>
            <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
                {score}
            </div>
            <button
                disabled={pending}
                onClick={handleDislike}
                aria-pressed={isDisliked}
                aria-label="Dislike comment"
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 ${"cursor-pointer"}`}
            >
                <ThumbsDown
                    className={`w-4 h-4 ${
                        isDisliked
                            ? "dark:text-blue-600 text-blue-700 "
                            : "text-gray-500"
                    }`}
                />
            </button>
        </div>
    );
}

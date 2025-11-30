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
import { useGToaster } from "#/components/layout/atoms-toasts-components/useToast";
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
    const toaster = useGToaster();
    const [pending, startTransition] = useTransition();
    let likes = 0;
    let dislikes = 0;
    for (const _rate of comment.ratings ?? []) {
        if (_rate.vote === null) {
            continue;
        }
        if (_rate.vote === true) {
            likes++;
        } else if (_rate.vote === false) {
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
                    error: toaster.error,
                    res,
                });
            });
            return;
        } else {
            startTransition(async () => {
                e.preventDefault();
                const res = await addLikeToCommentForm_ServerAction({
                    comment_id: comment.id,
                    currPath: currPath,
                    notProcessedAuthData: notProcessedAuthData,
                });
                serverActionsResponsesProcessorFromClientEnvironment({
                    error: toaster.error,
                    res,
                });
            });
            return;
        }
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
                    error: toaster.error,
                    res,
                });
            });
            return;
        } else {
            startTransition(async () => {
                e.preventDefault();
                const res = await addDislikeToCommentForm_ServerAction({
                    comment_id: comment.id,
                    currPath: currPath,
                    notProcessedAuthData: notProcessedAuthData,
                });
                serverActionsResponsesProcessorFromClientEnvironment({
                    error: toaster.error,
                    res,
                });
            });
            return;
        }
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
                    fill={isLiked ? "white" : "transparent"}
                    className={dislikeDark}
                />{" "}
                <ThumbsUp
                    fill={isLiked ? "black" : "transparent"}
                    className={dislikeLight}
                />
            </button>
            <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
                {score}
                {pending && "..."}
            </div>
            <button
                disabled={pending}
                onClick={handleDislike}
                aria-pressed={isDisliked}
                aria-label="Dislike comment"
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 ${"cursor-pointer"}`}
            >
                <ThumbsDown
                    fill={isDisliked ? "white" : "transparent"}
                    className={dislikeDark}
                />
                <ThumbsDown
                    fill={isDisliked ? "black" : "transparent"}
                    className={dislikeLight}
                />
            </button>
        </div>
    );
}
const dislikeLight = `w-4 h-4 dark:hidden dark:text-gray-500 text-gray-500`;
const dislikeDark = `w-4 h-4 hidden dark:block dark:text-gray-500 text-gray-500`;

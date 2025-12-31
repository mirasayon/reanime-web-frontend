"use client";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useTransition } from "react";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import {
    addDislikeToCommentForm_ServerAction,
    addLikeToCommentForm_ServerAction,
    deleteDislikeToCommentForm_ServerAction,
    deleteLikeToCommentForm_ServerAction,
} from "../actions-for-comments/add-like-to-comment-server-action";
export function ShowCommentRatingComponent({
    comment,
    userVote,
    currPath,
    authCurrent,
}: {
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
    userVote: number | null;
    currPath: string;
    authCurrent: AuthenticatorType;
}): React.JSX.Element {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();
    let likes = 0;
    let dislikes = 0;
    for (const rate of comment.ratings) {
        if (rate.value === 1) {
            likes++;
        } else if (rate.value === -1) {
            dislikes++;
        }
    }
    const score = likes - dislikes;
    const isLiked = userVote === 1;
    const isDisliked = userVote === -1;

    if (!authCurrent || authCurrent === 500) {
        <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">{score}</div>;
    }

    function handleAddLikeButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (isLiked) {
            startTransition(async () => {
                e.preventDefault();
                const res = await deleteLikeToCommentForm_ServerAction(comment.id, currPath);
                serverActionsResponsesProcessorFromClientEnvironment({
                    error: toaster.error,
                    res,
                });
            });
            return;
        } else {
            startTransition(async () => {
                e.preventDefault();
                const res = await addLikeToCommentForm_ServerAction(comment.id, currPath);
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
                const res = await deleteDislikeToCommentForm_ServerAction(comment.id, currPath);
                serverActionsResponsesProcessorFromClientEnvironment({
                    error: toaster.error,
                    res,
                });
            });
            return;
        } else {
            startTransition(async () => {
                e.preventDefault();
                const res = await addDislikeToCommentForm_ServerAction(comment.id, currPath);
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
            {authCurrent && !isDisliked ? (
                <button
                    disabled={pending}
                    onClick={handleAddLikeButton}
                    aria-pressed={isLiked}
                    aria-label="Like comment"
                    className={btnLikeOrDislike}
                >
                    <ThumbsUp fill={isLiked ? "white" : "transparent"} className={dislikeDark} />{" "}
                    <ThumbsUp fill={isLiked ? "black" : "transparent"} className={dislikeLight} />
                </button>
            ) : (
                <div className=" p-2 w-4 h-4"></div>
            )}
            <div className="font-medium text-gray-800 dark:text-slate-200 min-w-9 text-center ">
                {score}
                {pending && "..."}
            </div>
            {authCurrent && !isLiked ? (
                <button
                    disabled={pending}
                    onClick={handleDislike}
                    aria-pressed={isDisliked}
                    aria-label="Dislike comment"
                    className={btnLikeOrDislike}
                >
                    <ThumbsDown fill={isDisliked ? "white" : "transparent"} className={dislikeDark} />
                    <ThumbsDown fill={isDisliked ? "black" : "transparent"} className={dislikeLight} />
                </button>
            ) : (
                <div className=" p-2 w-4 h-4"></div>
            )}
        </div>
    );
}
const dislikeLight = `w-4 h-4 dark:hidden dark:text-gray-500 text-gray-500`;
const dislikeDark = `w-4 h-4 hidden dark:block dark:text-gray-500 text-gray-500`;
const btnLikeOrDislike =
    "flex items-center px-2 py-1 rounded-md transition-all duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 cursor-pointer";

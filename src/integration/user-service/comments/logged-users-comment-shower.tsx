"use client";
import { useState, type JSX } from "react";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { MenuCommentComponent } from "./comment-menu-component";
import { MainEditFormCommentComponent } from "./edit-form-comment-comment";
import { JustShowMainDataAboutComment } from "./components-primitives/show-main-data-about-comment";
import { ShowCommentRatingComponent } from "./ratings-of-comment/show-comment-rating-component";
import { JustShowCommentContent } from "./components-primitives/just-show-comment-contents";

export function LoggedProfileCommentShower({
    userServerBaseUrl,
    comment,
    current_user,
}: {
    current_user: Exclude<NonNullable<AuthenticatorType>, 500>;
    userServerBaseUrl: string;
    comment: Comment_ResponseTypes.get_all_for_anime[number];
}): JSX.Element {
    const [isEditing, setIsEditing] = useState(false);
    const linkToComment = `comment-${comment.id}`;
    return (
        <div
            className="m-2 grid p-2 items-center"
            key={comment.id}
            id={linkToComment}
        >
            <div className=" flex items-center">
                <JustShowMainDataAboutComment
                    {...{ comment, userServerBaseUrl }}
                />
                <div className="relative">
                    <MenuCommentComponent
                        userServerBaseUrl={userServerBaseUrl}
                        setFunction={setIsEditing}
                        comment_id={comment.id}
                        current_profile={current_user}
                        animeId={comment.anime_id}
                    />
                </div>
            </div>

            {isEditing ? (
                <MainEditFormCommentComponent
                    {...{
                        comment,
                        current_user,
                        setIsEditing,
                    }}
                />
            ) : (
                <JustShowCommentContent
                    comment={comment}
                    current_user={current_user}
                />
            )}
        </div>
    );
}

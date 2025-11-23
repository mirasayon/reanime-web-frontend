"use client";
import { useState, type JSX } from "react";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { MenuCommentComponent } from "./comment-menu-component";
import { MainEditFormCommentComponent } from "./edit-form-comment-comment";
import { JustShowMainDataAboutComment } from "./components-primitives/show-main-datas-about-comment";

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
                <JustShowCommentContent contentText={comment.content} />
            )}
        </div>
    );
}
export function JustShowCommentContent({
    contentText,
}: {
    contentText: string;
}) {
    return (
        <div className="grid items-center">
            <span
                className={` p-2 m-2 w-full dark:bg-slate-800/60 hover:dark:bg-slate-800/80 bg-slate-100  hover:bg-slate-200/40`}
            >
                {contentText}
            </span>{" "}
        </div>
    );
}

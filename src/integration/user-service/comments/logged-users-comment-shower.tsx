"use client";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { useState, type JSX } from "react";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { MenuCommentComponent } from "./comment-menu-component";
import { JustShowCommentContent } from "./components-primitives/just-show-comment-contents";
import { JustShowMainDataAboutComment } from "./components-primitives/show-main-data-about-comment";
import { MainEditFormCommentComponent } from "./edit-form-comment-comment";

export function LoggedProfileCommentShower({
    userServerBaseUrl,
    comment,
    current_user,
}: {
    current_user: Exclude<NonNullable<AuthenticatorType>, 500>;
    userServerBaseUrl: string;
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
}): React.JSX.Element {
    const [isEditing, setIsEditing] = useState(false);
    const linkToComment = `comment-${comment.id}`;
    const isThereLogged_and_HisCommentSeeing_UserNow =
        current_user && current_user.data.profile_id === comment.by_profile_id;
    return (
        <div className="m-2 grid p-2 items-center" key={comment.id} id={linkToComment}>
            <div className=" flex items-center">
                <JustShowMainDataAboutComment {...{ comment, userServerBaseUrl }} />
                {isThereLogged_and_HisCommentSeeing_UserNow && (
                    <div className="relative">
                        <MenuCommentComponent
                            userServerBaseUrl={userServerBaseUrl}
                            setFunction={setIsEditing}
                            comment_id={comment.id}
                            current_profile={current_user}
                            animeId={comment.external_anime_id}
                        />
                    </div>
                )}
            </div>

            {isEditing ? (
                <MainEditFormCommentComponent
                    {...{
                        comment,
                        setIsEditing,
                    }}
                />
            ) : (
                <JustShowCommentContent comment={comment} current_user={current_user} />
            )}
        </div>
    );
}

import { type JSX } from "react";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { JustShowMainDataAboutComment } from "./components-primitives/show-main-data-about-comment";
import { JustShowCommentContent } from "./components-primitives/just-show-comment-contents";

export function NotLoggedProfileCommentShower({
    userServerBaseUrl,
    comment,
}: {
    userServerBaseUrl: string;
    comment: Comment_ResponseTypes.get_all_for_anime[number];
}): JSX.Element {
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
            </div>

            <JustShowCommentContent comment={comment} current_user={null} />
        </div>
    );
}

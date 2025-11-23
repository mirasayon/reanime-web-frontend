import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { ShowCommentRatingComponent } from "../ratings-of-comment/show-comment-rating-component";

export function JustShowCommentContent({
    comment,
    current_user,
}: {
    comment: Comment_ResponseTypes.get_all_for_anime[number];
    current_user: Exclude<AuthenticatorType, 500>;
}) {
    if (current_user) {
        const profileID = comment.ratings.find(
            (c) => c.by_profile_id === current_user.data.profile.id,
        );
        return (
            <div className="grid items-center">
                <span
                    className={` p-2 m-2 w-full dark:bg-slate-800/60 hover:dark:bg-slate-800/80 bg-slate-100  hover:bg-slate-200/40`}
                >
                    {comment.content}
                </span>{" "}
                <ShowCommentRatingComponent
                    comment={comment}
                    userVote={profileID?.vote}
                    notProcessedAuthData={current_user}
                    currPath={"/anime/" + comment.anime_id}
                />
            </div>
        );
    }
    return (
        <div className="grid items-center">
            <span
                className={` p-2 m-2 w-full dark:bg-slate-800/60 hover:dark:bg-slate-800/80 bg-slate-100  hover:bg-slate-200/40`}
            >
                {comment.content}
            </span>{" "}
            <ShowCommentRatingComponent
                comment={comment}
                notProcessedAuthData={null}
                currPath={"/anime/" + comment.anime_id}
            />
        </div>
    );
}

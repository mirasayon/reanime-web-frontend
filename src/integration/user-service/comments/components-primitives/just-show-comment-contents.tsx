import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { ShowCommentRatingComponent } from "../ratings-of-comment/main-comment-rating-component";
export function CommentTextAndRating({
    comment,
    current_user,
}: {
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
    current_user: AuthenticatorType;
}) {
    if (current_user) {
        const foundUserVote = comment.ratings.find((c) => c.by_profile_id === current_user.data.profile_id);
        return (
            <div className="grid items-center">
                <span
                    className={` p-2 m-2 w-full dark:bg-slate-800/60 hover:dark:bg-slate-800/80 bg-slate-100  hover:bg-slate-200/40`}
                >
                    {comment.content}
                </span>
                <ShowCommentRatingComponent
                    comment={comment}
                    userVote={foundUserVote ? foundUserVote.value : null}
                    authCurrent={current_user}
                    currPath={"/anime/" + comment.external_anime_id}
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
                authCurrent={null}
                userVote={null}
                currPath={"/anime/" + comment.external_anime_id}
            />
        </div>
    );
}

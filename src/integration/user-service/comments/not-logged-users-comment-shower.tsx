import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { CommentTextAndRating } from "./components-primitives/just-show-comment-contents";
import { JustShowMainDataAboutComment } from "./components-primitives/show-main-data-about-comment";

export function NotLoggedProfileCommentShower({
    comment,
}: {
    comment: ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"][number];
}): React.JSX.Element {
    const linkToComment = `comment-${comment.id}`;
    return (
        <div className="m-2 grid p-2 items-center" key={comment.id} id={linkToComment}>
            <div className=" flex items-center">
                <JustShowMainDataAboutComment {...{ comment }} />
            </div>

            <CommentTextAndRating comment={comment} auth={null} />
        </div>
    );
}

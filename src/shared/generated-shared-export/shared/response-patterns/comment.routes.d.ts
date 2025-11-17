import type { AvatarPicture, Comment, CommentVote, Profile } from "../../databases/orm/client.js";
export declare namespace Comment_ResponseTypes {
    type create_comment = Comment;
    type update_comment = Comment;
    type get_all_for_anime = (Comment & {
        ratings: CommentVote[];
        by_profile: Profile & {
            avatar: AvatarPicture | null;
            by_account: {
                username: string;
            };
        };
    })[];
    type all_for_public_profile = Comment[];
    type all_my_comments = Comment[];
    type add_like = {
        vote: CommentVote;
        is_updated: boolean;
    };
    type delete_like = CommentVote;
    type add_dislike = {
        vote: CommentVote;
        is_updated: boolean;
    };
    type delete_dislike = CommentVote;
    type delete_comment = Comment;
}
//# sourceMappingURL=comment.routes.d.ts.map
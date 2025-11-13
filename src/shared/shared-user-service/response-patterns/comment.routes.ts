import type { AvatarPicture, Comment, CommentVote, Profile } from "&us/orm/client";

/** RESPONSES For Comment Route */
export namespace Comment_ResponseTypes {
    export type create_comment = Comment;
    export type update_comment = Comment;
    export type get_all_for_anime = (Comment & {
        ratings: CommentVote[];
        by_profile: Profile & {
            avatar: AvatarPicture | null;
            by_account: {
                username: string;
            };
        };
    })[];
    export type add_like = {
        vote: CommentVote;
        is_updated: boolean;
    };
    export type delete_like = CommentVote;
    export type add_dislike = {
        vote: CommentVote;
        is_updated: boolean;
    };
    export type delete_dislike = CommentVote;
    export type delete_comment = Comment;
}

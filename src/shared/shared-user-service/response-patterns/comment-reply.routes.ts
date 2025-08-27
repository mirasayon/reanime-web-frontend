import type { Reply, ReplyVote } from "&us/orm/client";

/** RESPONSES For Reply Route */
export namespace Reply_ResponseTypes {
    export type edit_reply = Reply;
    export type get_1_reply_by_its_id = Reply;
    export type get_replies_by_comment_id = Reply[];
    export type add_like = {
        is_updated: boolean;
        vote: ReplyVote;
    };
    export type add_dislike = {
        is_updated: boolean;
        vote: ReplyVote;
    };
    export type delete_like = ReplyVote;
    export type delete_dislike = ReplyVote;
    export type report = 0;
    export type create_reply = Reply;
    /** Deleted reply type */
    export type delete_reply = Reply;
}


import type { Reply, ReplyVote } from "../../databases/orm/client.js";
export declare namespace Reply_ResponseTypes {
    type edit_reply = Reply;
    type get_1_reply_by_its_id = Reply;
    type get_replies_by_comment_id = Reply[];
    type add_like = {
        is_updated: boolean;
        vote: ReplyVote;
    };
    type add_dislike = {
        is_updated: boolean;
        vote: ReplyVote;
    };
    type delete_like = ReplyVote;
    type delete_dislike = ReplyVote;
    type report = 0;
    type create_reply = Reply;
    type delete_reply = Reply;
}
//# sourceMappingURL=comment-reply.routes.d.ts.map
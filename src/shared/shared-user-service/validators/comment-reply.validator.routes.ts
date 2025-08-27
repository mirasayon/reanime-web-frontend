import { UtilitySchemas } from "./utils/common.js";
import { z } from "zod";

const schemas = new (class Reply_ValidatorSchemas {
    get_1_reply_by_its_id = UtilitySchemas.reply_id;

    get_replies_by_comment_id = z.strictObject({
        page: UtilitySchemas.page_number,
        limit: UtilitySchemas.page_size,
        comment_id: UtilitySchemas.comment_id,
    });
    create_reply = z.strictObject({
        comment_id: UtilitySchemas.comment_id,
        content: UtilitySchemas.message("Ответ на комментарий"),
    });

    update_reply = z.strictObject({
        content: UtilitySchemas.message("Новый ответ"),
        reply_id: UtilitySchemas.reply_id,
    });
    delete_reply = UtilitySchemas.reply_id;

    report_reply = z.strictObject({
        reply_id: UtilitySchemas.reply_id,
        details: UtilitySchemas.details,
        type: UtilitySchemas.report_type,
    });

    add_like = UtilitySchemas.reply_id;

    add_dislike = UtilitySchemas.reply_id;

    delete_like = UtilitySchemas.reply_id;

    delete_dislike = UtilitySchemas.reply_id;
})();
export { schemas as reply_schemas };

export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type get_1_reply_by_its_id = z.infer<Schemas["get_1_reply_by_its_id"]>;

    export type get_replies_by_comment_id = z.infer<Schemas["get_replies_by_comment_id"]>;
    export type create_reply = z.infer<Schemas["create_reply"]>;
    export type update_reply = z.infer<Schemas["update_reply"]>;
    export type delete_reply = z.infer<Schemas["delete_reply"]>;
    export type report_reply = z.infer<Schemas["report_reply"]>;
    export type add_like = z.infer<Schemas["add_like"]>;
    export type add_dislike = z.infer<Schemas["add_dislike"]>;
    export type delete_like = z.infer<Schemas["delete_like"]>;
    export type delete_dislike = z.infer<Schemas["delete_dislike"]>;
}

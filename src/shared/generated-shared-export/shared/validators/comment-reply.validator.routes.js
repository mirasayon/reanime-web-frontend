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
//# sourceMappingURL=comment-reply.validator.routes.js.map
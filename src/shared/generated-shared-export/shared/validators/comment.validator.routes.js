import { UtilitySchemas } from "./utils/common.js";
import { z } from "zod";
import { account_username } from "./utils/username.validator.js";
const schemas = new (class Comment_ValidatorSchemas {
    create = z.strictObject({
        anime_id: UtilitySchemas.anime_id,
        content: UtilitySchemas.message("Комментарий"),
    });
    get_all_for_anime = z.strictObject({
        page: UtilitySchemas.page_number,
        limit: UtilitySchemas.page_size,
        anime_id: UtilitySchemas.anime_id,
    });
    all_my_comments = z.strictObject({
        page: UtilitySchemas.page_number,
        limit: UtilitySchemas.page_size,
    });
    all_for_public_profile = z.strictObject({
        page: UtilitySchemas.page_number,
        username: account_username,
        limit: UtilitySchemas.page_size,
    });
    update = z.strictObject({
        new_content: UtilitySchemas.message("Новый комментарий"),
        comment_id: UtilitySchemas.comment_id,
    });
    delete_comment = UtilitySchemas.comment_id;
    report = z.strictObject({
        comment_id: UtilitySchemas.comment_id,
        details: UtilitySchemas.details,
        type: UtilitySchemas.report_type,
    });
    add_like = UtilitySchemas.comment_id;
    add_dislike = UtilitySchemas.comment_id;
    delete_like = UtilitySchemas.comment_id;
    delete_dislike = UtilitySchemas.comment_id;
})();
export { schemas as comment_schemas };
//# sourceMappingURL=comment.validator.routes.js.map
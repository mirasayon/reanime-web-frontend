import { UtilitySchemas } from "./utils/common";
import { z } from "zod";

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
export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type create = z.infer<Schemas["create"]>;
    export type get_all_for_anime = z.infer<Schemas["get_all_for_anime"]>;
    export type update = z.infer<Schemas["update"]>;
    export type delete_comment = z.infer<Schemas["delete_comment"]>;
    export type report = z.infer<Schemas["report"]>;
    export type add_like = z.infer<Schemas["add_like"]>;
    export type add_dislike = z.infer<Schemas["add_dislike"]>;
    export type delete_like = z.infer<Schemas["delete_like"]>;
    export type delete_dislike = z.infer<Schemas["delete_dislike"]>;
}

import { z } from "zod";
declare const schemas: {
    get_1_reply_by_its_id: z.ZodCUID;
    get_replies_by_comment_id: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodCoercedNumber<unknown>;
        comment_id: z.ZodCUID;
    }, z.core.$strict>;
    create_reply: z.ZodObject<{
        comment_id: z.ZodCUID;
        content: z.ZodString;
    }, z.core.$strict>;
    update_reply: z.ZodObject<{
        content: z.ZodString;
        reply_id: z.ZodCUID;
    }, z.core.$strict>;
    delete_reply: z.ZodCUID;
    report_reply: z.ZodObject<{
        reply_id: z.ZodCUID;
        details: z.ZodString;
        type: z.ZodEnum<{
            other: "other";
            spam: "spam";
            offensive: "offensive";
        }>;
    }, z.core.$strict>;
    add_like: z.ZodCUID;
    add_dislike: z.ZodCUID;
    delete_like: z.ZodCUID;
    delete_dislike: z.ZodCUID;
};
export { schemas as reply_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type get_1_reply_by_its_id = z.infer<Schemas["get_1_reply_by_its_id"]>;
    type get_replies_by_comment_id = z.infer<Schemas["get_replies_by_comment_id"]>;
    type create_reply = z.infer<Schemas["create_reply"]>;
    type update_reply = z.infer<Schemas["update_reply"]>;
    type delete_reply = z.infer<Schemas["delete_reply"]>;
    type report_reply = z.infer<Schemas["report_reply"]>;
    type add_like = z.infer<Schemas["add_like"]>;
    type add_dislike = z.infer<Schemas["add_dislike"]>;
    type delete_like = z.infer<Schemas["delete_like"]>;
    type delete_dislike = z.infer<Schemas["delete_dislike"]>;
}
//# sourceMappingURL=comment-reply.validator.routes.d.ts.map
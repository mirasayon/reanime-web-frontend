import { z } from "zod";
declare const schemas: {
    create: z.ZodObject<{
        anime_id: z.ZodCoercedNumber<unknown>;
        content: z.ZodString;
    }, z.core.$strict>;
    get_all_for_anime: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodCoercedNumber<unknown>;
        anime_id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strict>;
    all_my_comments: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodCoercedNumber<unknown>;
    }, z.core.$strict>;
    all_for_public_profile: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        username: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        limit: z.ZodCoercedNumber<unknown>;
    }, z.core.$strict>;
    update: z.ZodObject<{
        new_content: z.ZodString;
        comment_id: z.ZodCUID;
    }, z.core.$strict>;
    delete_comment: z.ZodCUID;
    report: z.ZodObject<{
        comment_id: z.ZodCUID;
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
export { schemas as comment_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type create = z.infer<Schemas["create"]>;
    type get_all_for_anime = z.infer<Schemas["get_all_for_anime"]>;
    type update = z.infer<Schemas["update"]>;
    type delete_comment = z.infer<Schemas["delete_comment"]>;
    type report = z.infer<Schemas["report"]>;
    type all_my_comments = z.infer<Schemas["all_my_comments"]>;
    type all_for_public_profile = z.infer<Schemas["all_for_public_profile"]>;
    type add_like = z.infer<Schemas["add_like"]>;
    type add_dislike = z.infer<Schemas["add_dislike"]>;
    type delete_like = z.infer<Schemas["delete_like"]>;
    type delete_dislike = z.infer<Schemas["delete_dislike"]>;
}
//# sourceMappingURL=comment.validator.routes.d.ts.map
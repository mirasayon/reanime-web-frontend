import { z } from "zod";
export declare const schemas: {
    explore_likes: z.ZodUndefined;
    explore_dislikes: z.ZodUndefined;
    view_vote_on_anime: z.ZodCoercedNumber<unknown>;
    add_like_to_anime: z.ZodCoercedNumber<unknown>;
    delete_like_from_anime: z.ZodCoercedNumber<unknown>;
    add_dislike_to_anime: z.ZodCoercedNumber<unknown>;
    delete_dislike_from_anime: z.ZodCoercedNumber<unknown>;
};
export { schemas as favoriteAnimes_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type explore_likes = z.infer<Schemas["explore_likes"]>;
    type explore_dislikes = z.infer<Schemas["explore_dislikes"]>;
    type view_vote_on_anime = z.infer<Schemas["view_vote_on_anime"]>;
    type add_like_to_anime = z.infer<Schemas["add_like_to_anime"]>;
    type delete_like_from_anime = z.infer<Schemas["delete_like_from_anime"]>;
    type add_dislike_to_anime = z.infer<Schemas["add_dislike_to_anime"]>;
    type delete_dislike_from_anime = z.infer<Schemas["delete_dislike_from_anime"]>;
}
//# sourceMappingURL=favorite-animes.validator.routes.d.ts.map
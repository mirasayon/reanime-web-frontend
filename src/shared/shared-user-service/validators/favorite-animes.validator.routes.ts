import { UtilitySchemas } from "./utils/common";
import { z } from "zod";

export const schemas = new (class FavoriteAnimes_ValidatorSchemas {
    explore_likes = UtilitySchemas.void;
    explore_dislikes = UtilitySchemas.void;
    view_vote_on_anime = UtilitySchemas.anime_id;
    add_like_to_anime = UtilitySchemas.anime_id;
    delete_like_from_anime = UtilitySchemas.anime_id;
    add_dislike_to_anime = UtilitySchemas.anime_id;
    delete_dislike_from_anime = UtilitySchemas.anime_id;
})();
export { schemas as favoriteAnimes_schemas };
export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type explore_likes = z.infer<Schemas["explore_likes"]>;
    export type explore_dislikes = z.infer<Schemas["explore_dislikes"]>;
    export type view_vote_on_anime = z.infer<Schemas["view_vote_on_anime"]>;
    export type add_like_to_anime = z.infer<Schemas["add_like_to_anime"]>;
    export type delete_like_from_anime = z.infer<Schemas["delete_like_from_anime"]>;
    export type add_dislike_to_anime = z.infer<Schemas["add_dislike_to_anime"]>;
    export type delete_dislike_from_anime = z.infer<Schemas["delete_dislike_from_anime"]>;
}


import { UtilitySchemas } from "./utils/common.js";
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
//# sourceMappingURL=favorite-animes.validator.routes.js.map
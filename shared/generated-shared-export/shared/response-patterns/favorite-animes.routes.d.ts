import type { AnimeFavorite } from "../../databases/orm/client.js";
export declare namespace FavoriteAnimes_ResponseTypes {
    type explore_likes = AnimeFavorite[];
    type explore_dislikes = AnimeFavorite[];
    type view_vote_on_anime = AnimeFavorite | null;
    type add_like_to_anime = {
        vote: AnimeFavorite;
        is_updated: boolean;
    };
    type delete_like_from_anime = AnimeFavorite;
    type add_dislike_to_anime = {
        vote: AnimeFavorite;
        is_updated: boolean;
    };
    type delete_dislike_from_anime = AnimeFavorite;
}
//# sourceMappingURL=favorite-animes.routes.d.ts.map
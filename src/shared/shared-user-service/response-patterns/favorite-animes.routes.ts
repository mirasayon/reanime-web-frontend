import type { AnimeFavorite } from "../orm/client";

/** RESPONSES For Favorite Animes Route */
export namespace FavoriteAnimes_ResponseTypes {
    export type explore_likes = AnimeFavorite[];
    export type explore_dislikes = AnimeFavorite[];
    export type view_vote_on_anime = AnimeFavorite | null;
    export type add_like_to_anime = {
        vote: AnimeFavorite;
        is_updated: boolean;
    };
    export type delete_like_from_anime = AnimeFavorite;
    export type add_dislike_to_anime = {
        vote: AnimeFavorite;
        is_updated: boolean;
    };
    export type delete_dislike_from_anime = AnimeFavorite;
}

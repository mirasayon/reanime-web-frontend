import type { AnimeBookmark } from "&us/orm/client";

/** RESPONSES For Marked anime list Route */
export namespace MarkedAnimeCollection_ResponseTypes {
    export type get_all_list = AnimeBookmark[];
    export type get_for_anime = AnimeBookmark;
    export type get_list_of_completed = AnimeBookmark[];
    export type get_list_of_planned = AnimeBookmark[];
    export type get_list_of_abandoned = AnimeBookmark[];
    export type get_list_of_watching = AnimeBookmark[];
    export type create_watching = AnimeBookmark;
    export type create_planned = AnimeBookmark;
    export type create_abandoned = AnimeBookmark;
    export type create_completed = AnimeBookmark;
    export type delete_abandoned = AnimeBookmark;
    export type delete_watching = AnimeBookmark;
    export type delete_planned = AnimeBookmark;
    export type delete_completed = AnimeBookmark;
}


import type { AnimeBookmark } from "../../databases/orm/client.js";
export declare namespace MarkedAnimeCollection_ResponseTypes {
    type get_all_list = AnimeBookmark[];
    type get_for_anime = AnimeBookmark;
    type get_list_of_completed = AnimeBookmark[];
    type get_list_of_planned = AnimeBookmark[];
    type get_list_of_abandoned = AnimeBookmark[];
    type get_list_of_watching = AnimeBookmark[];
    type create_watching = AnimeBookmark;
    type create_planned = AnimeBookmark;
    type create_abandoned = AnimeBookmark;
    type create_completed = AnimeBookmark;
    type delete_abandoned = AnimeBookmark;
    type delete_watching = AnimeBookmark;
    type delete_planned = AnimeBookmark;
    type delete_completed = AnimeBookmark;
}
//# sourceMappingURL=marked-anime-list.routes.d.ts.map
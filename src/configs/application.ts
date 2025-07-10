import { filter_search_params } from "#app/list/[filter_uid]/page";
import type { Metadata } from "next/types";

class ApplicationConfigClass {
    /** contains milliseconds for 2000 years */
    two_thousand_year = 2 * 365 * 24 * 60 * 60 * 1000;
    /** contains this year in number type */
    this_year = new Date().getFullYear();
    birth_year = 2024;
    page_index_interval = 30;
    valid_extensions = ["jpeg", "png", "jpg"];
    /** @name path for getting avatar images */
    internal_avatar_storage_path_url = "/api/v1/storage/avatars/" as const;
    __default_user_avatar = "/_assets/default_avatar.png" as const;
    error_image_for_light_theme = "/_assets/on_error_image_for_light_theme.png" as const;
    error_image_for_night_theme = "/_assets/on_error_image_for_night_theme.png" as const;
    shikimoris_404_image = "https://shikimori.one/assets/globals/missing_original.jpg" as const;
    /** @type  regExp that contains /image\/(png|jpeg|jpg)/i */
    needed_image_formats: RegExp = /image\/(png|jpeg|jpg)/;
    metadata404: Metadata = {
        title: "Страница не найдена, 404",
        robots: "noindex, nofollow",
    };

    list_anime_ru = {
        released: "Завершенные аниме",
        movie: "Аниме фильмы",
        ongoing: "Онгоинги",
        popular: "Популярные аниме",
        series: "Аниме сериалы",
        this_year: "Этот сезон",
    } as const;
    filters_uids = Object.keys(this.list_anime_ru) as filter_search_params[];
}
export const ApplicationConfig = new ApplicationConfigClass();

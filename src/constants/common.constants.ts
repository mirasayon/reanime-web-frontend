import type { filter_search_params } from "#app/list/[filter_uid]/page";
import type { Metadata } from "next/types";

/** contains milliseconds for 2000 years */
export const two_thousand_years = 2 * 365 * 24 * 60 * 60 * 1000;
/** contains this year in number type */
export const this_year = new Date().getFullYear();
export const birth_year = 2024;
export const page_index_interval = 30;
export const valid_extensions = ["jpeg", "png", "jpg"];
/** @name path for getting avatar images */
export const internal_avatar_storage_path_url = "/api/v1/storage/avatars/" as const;
export const __default_user_avatar = "/_assets/default_avatar.png" as const;
export const error_image_for_light_theme = "/_assets/on_error_image_for_light_theme.png" as const;
export const error_image_for_night_theme = "/_assets/on_error_image_for_night_theme.png" as const;
export const shikimoris_404_image = "https://shikimori.one/assets/globals/missing_original.jpg" as const;
/** @type  regExp that contains /image\/(png|jpeg|jpg)/i */
export const needed_image_formats: RegExp = /image\/(png|jpeg|jpg)/;
export const metadata404: Metadata = {
    title: "Страница не найдена, 404",
    robots: "noindex, nofollow",
};

export const list_anime_ru = {
    released: "Завершенные аниме",
    movie: "Аниме фильмы",
    ongoing: "Онгоинги",
    popular: "Популярные аниме",
    series: "Аниме сериалы",
    this_year: "Этот сезон",
} as const;
export const filters_uids = Object.keys(list_anime_ru) as filter_search_params[];

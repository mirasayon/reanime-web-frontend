import type { Metadata } from "next/types";

export type filter_search_params = keyof typeof list_anime_ru;
export const this_year = new Date().getFullYear();
export const birth_year = 2024;
export const page_index_interval = 30;
export const valid_extensions = ["jpeg", "png", "jpg"];
export const __default_user_avatar = "/_assets/default_avatar.png" as const;
export const error_image_for_light_theme = "/_assets/on_error_image_for_light_theme.png" as const;
export const error_image_for_night_theme = "/_assets/on_error_image_for_night_theme.png" as const;
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
export const filterAnimeCommands = Object.keys(list_anime_ru) as filter_search_params[];
export const THIRTY_DAYS = 60 * 60 * 24 * 30;

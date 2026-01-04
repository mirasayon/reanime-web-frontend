export type filter_search_params = keyof typeof list_anime_ru;
export const THIS_YEAR = new Date().getFullYear();
export const REANIME_BIRTH_YEAR = 2024;
export const ANIME_POSTER_404_IMAGE_LIGHT = "/_assets/on_error_image_for_light_theme.png" as const;
export const ANIME_POSTER_404_IMAGE_DARK = "/_assets/on_error_image_for_night_theme.png" as const;

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

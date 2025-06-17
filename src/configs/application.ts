import { EnvConfig } from "#/configs/env";
import { filter_search_params } from "#app/list/[filter_uid]/page";
import { NextResponse } from "next/server";
import type { Metadata } from "next/types";

class ApplicationConfigClass {
    /** contains milliseconds for 2000 years */
    two_thousand_year = 2 * 365 * 24 * 60 * 60 * 1000;
    /** contains this year in number type */
    this_year = new Date().getFullYear();
    birth_year = 2024;
    page_index_interval = 30;
    valid_extensions = ["jpeg", "png", "jpg"];
    route__404 = new NextResponse("Not found", { status: 404 });
    possible_profile_tab_value_patter: RegExp = /(watching|liked|inplan|dumped|viewed)/;
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
    api_current_url = EnvConfig.mode.prod
        ? EnvConfig.server.urls.api.prod
        : EnvConfig.server.urls.api.dev;
    list_anime_ru: { [key in filter_search_params]: string } = {
        released: "Завершенные аниме",
        movies: "Аниме фильмы",
        ongoings: "Онгоинги",
        populars: "Популярные аниме",
        serials: "Аниме сериалы",
        this_year: "Этот сезон",
    };
    filters_uids = ["populars", "serials", "released", "movies", "ongoings", "this_year"] as const;
}
export const ApplicationConfig = new ApplicationConfigClass();

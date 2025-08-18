import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { Default_poster } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { EnvConfig } from "#/configs/environment-variables.main-config";
export const get_poster_image_url_by_filename = (filename: string | null) => {
    if (!filename) {
        return Default_poster(true);
    }
    return `${EnvConfig.partners.resource_service.url}/storage/anime/poster_image/${filename}` as const;
};
export const get_type_of_anime = (data: IReady_Animes_DB) => {
    return data.type === "movie" ? "Фильм" : ("ТВ Сериал" as const);
};
export const get_anime_url_by_id_and_type = (data: IReady_Animes_DB) => `/${data.type}/${data.sid}` as const;

export const set_top_chart_animes_image_url = (segment: string) =>
    `${EnvConfig.partners.resource_service.url}/storage/animes/tcaps/${segment}` as const;

export const sleepX = async (milliseconds: number): Promise<void> => {
    return await new Promise((_void) => setTimeout(_void, milliseconds));
};

export const has_only_latins_and_numbers = (str: string): boolean => {
    // return /^[0-9a-zA-Z]+$/gi.test(str);
    return /^[a-z\d]+$/gim.test(str);
};

export const hasNumberInFirstChar = (str: string): boolean => {
    return /^\d/.test(str);
};

export const contains_only_latin_letters = (input: string): boolean => {
    return /^[a-zA-Z]+$/gim.test(input);
};
export const Parse_String_With_Slashes_To_Array_Of_Strings = (names: string | null): string[] => {
    return names ? names.split(/ \/ /) : [""];
};
export const is_contains_only_numeric_string = (input: string): boolean => {
    const is_contain: boolean = /^\d+$/.test(input);
    return is_contain;
};
export const get_anime_frame_image_url = (filename: string, anime_id: number) => {
    return `${EnvConfig.partners.resource_service.url}/storage/animes/screenshots/${anime_id}/${filename}`;
};

import type { JsonDB } from "@reanime.art/resource-service/types/json-db.js";
import { UtilityJSX } from "#/components/utilities/x_components";
import { EnvConfig } from "#/configs/env";
export const Global_Utilities = new (class Global_Utilities {
    get_poster_image_url_by_filename = (filename?: string) => {
        if (!filename) {
            return undefined;
        }
        return `${EnvConfig.partners.resource_service.url.current}/storage/anime/poster_image/${filename}` as const;
    };
    get_rea_poster = (img?: string) => {
        return this.get_poster_image_url_by_filename(img) || UtilityJSX.Default_poster();
    };
    get_type_of_anime = (data: JsonDB.ftype) => {
        return data.t ? "Фильм" : ("ТВ Сериал" as const);
    };
    get_anime_url_by_id_and_type = (data: JsonDB.ftype) => `/${data.t ? "movie" : "series"}/${data.sid}` as const;

    set_top_chart_animes_image_url = (segment: string) =>
        `${EnvConfig.partners.resource_service.url.current}/storage/animes/tcaps/${segment}` as const;

    sleepX = async (milliseconds: number): Promise<void> => {
        return await new Promise((_void) => setTimeout(_void, milliseconds));
    };

    has_only_latins_and_numbers(str: string): boolean {
        // return /^[0-9a-zA-Z]+$/gi.test(str);
        return /^[a-z\d]+$/gim.test(str);
    }

    hasNumberInFirstChar(str: string): boolean {
        return /^\d/.test(str);
    }

    contains_only_latin_letters(input: string): boolean {
        return /^[a-zA-Z]+$/gim.test(input);
    }
    Parse_String_With_Slashes_To_Array_Of_Strings(names: string | null): string[] {
        return names ? names.split(/ \/ /) : [""];
    }
    is_contains_only_numeric_string(input: string): boolean {
        const is_contain: boolean = /^\d+$/.test(input);
        return is_contain;
    }
    get_anime_frame_image_url = (filename: string, anime_id: number) => {
        return `${EnvConfig.partners.resource_service.url.current}/storage/animes/screenshots/${anime_id}/${filename}`;
    };
})();

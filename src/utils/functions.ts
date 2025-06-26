import type { JsonDB } from "#T/shared/json_db";
import { UtilityJSX } from "#/components/utilities/x_components";
import { ApplicationConfig } from "#/configs/application";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/reanime_resource_service_integrator";
class UtilsClass {
    get_poster_image_url_by_filename = (filename?: string) => {
        if (!filename) {
            return undefined;
        }
        return `${ApplicationConfig.current_resource_service_api_url}/storage/anime/poster_image/${filename}` as const;
    };
    get_rea_poster = (is_dark: boolean, img?: string) => {
        return this.get_poster_image_url_by_filename(img) || UtilityJSX.Default_poster(is_dark);
    };
    get_type_of_anime = (data: JsonDB.ftype) => {
        return data.t ? "Фильм" : ("ТВ Сериал" as const);
    };
    get_anime_url_by_id_and_type = (data: JsonDB.ftype) =>
        `/${data.t ? "m" : "s"}/${data.sid}` as const;

    set_top_chart_animes_image_url = (segment: string) =>
        `${ApplicationConfig.current_resource_service_api_url}/storage/animes/tcaps/${segment}` as const;

    sleepX = async (milliseconds: number): Promise<void> => {
        return await new Promise((_void) => setTimeout(_void, milliseconds));
    };

    GetListAnimes = async ({
        liked_animes_ids,
        watching_animes_ids,
        inplan_animes_ids,
        viewed_animes_ids,
    }: {
        liked_animes_ids: number[];
        watching_animes_ids: number[];
        inplan_animes_ids: number[];
        viewed_animes_ids: number[];
    }) => {
        const watching_animes_kodiks: JsonDB.ftype[] = [];
        for await (const element of watching_animes_ids) {
            const watching_: JsonDB.ftype | null =
                await Reanime_Resource_Service_Api_Integrator.core.byid.any_by_id(element);
            watching_ && watching_animes_kodiks.push(watching_);
        }

        const viewed_animes: JsonDB.ftype[] = [];
        for await (const element of viewed_animes_ids) {
            const watching_: JsonDB.ftype | null =
                await Reanime_Resource_Service_Api_Integrator.core.byid.any_by_id(element);
            watching_ && viewed_animes.push(watching_);
        }

        const inplan_animes_kodiks: JsonDB.ftype[] = [];
        for await (const element of inplan_animes_ids) {
            const watching_: JsonDB.ftype | null =
                await Reanime_Resource_Service_Api_Integrator.core.byid.any_by_id(element);
            watching_ && inplan_animes_kodiks.push(watching_);
        }

        const liked_animes_kodiks: JsonDB.ftype[] = [];

        for await (const element of liked_animes_ids) {
            const liked_: JsonDB.ftype | null =
                await Reanime_Resource_Service_Api_Integrator.core.byid.any_by_id(element);
            liked_ && liked_animes_kodiks.push(liked_);
        }

        return {
            liked_animes_kodiks,
            inplan_animes_kodiks,
            viewed_animes,
            watching_animes_kodiks,
        };
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
        return `${ApplicationConfig.current_resource_service_api_url}/storage/animes/screenshots/${anime_id}/${filename}`;
    };
}
export const Global_Utilities = new UtilsClass();

import { ReaApi } from "#/services/apis/rea_api";
import type { JsonDB } from "#T/shared/json_db";
import { EnvConfig } from "#/configs/env";
import { UtilityJSX } from "#/components/utilities/x_components";
class UtilsClass {
    reaApiUrl = EnvConfig.mode.prod
        ? EnvConfig.server.urls.api.prod
        : EnvConfig.server.urls.api.dev;
    SetREAPIUrl = (segment?: string) => {
        if (!segment) {
            return undefined;
        }
        return `${this.reaApiUrl}/storage/animes/pi/${segment}` as const;
    };
    getReaPosterFinal = (is_dark: boolean, img?: string) => {
        return this.SetREAPIUrl(img) || UtilityJSX.Default_poster(is_dark);
    };
    getTypeOfAnimeRea = (data: JsonDB.ftype) => {
        return data.t ? "Фильм" : ("ТВ Сериал" as const);
    };
    getUrlReaAnime = (data: JsonDB.ftype) => `/${data.t ? "m" : "s"}/${data.sid}` as const;
    SetREAPITopChartsUrl = (segment?: string) => {
        if (!segment) {
            return undefined;
        }
        return `${this.reaApiUrl}/storage/animes/tcaps/${segment}`;
    };
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
            const watching_: JsonDB.ftype | null = await ReaApi.core.byid.any(element);
            watching_ && watching_animes_kodiks.push(watching_);
        }

        const viewed_animes: JsonDB.ftype[] = [];
        for await (const element of viewed_animes_ids) {
            const watching_: JsonDB.ftype | null = await ReaApi.core.byid.any(element);
            watching_ && viewed_animes.push(watching_);
        }

        const inplan_animes_kodiks: JsonDB.ftype[] = [];
        for await (const element of inplan_animes_ids) {
            const watching_: JsonDB.ftype | null = await ReaApi.core.byid.any(element);
            watching_ && inplan_animes_kodiks.push(watching_);
        }

        const liked_animes_kodiks: JsonDB.ftype[] = [];

        for await (const element of liked_animes_ids) {
            const liked_: JsonDB.ftype | null = await ReaApi.core.byid.any(element);
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
    ReaScreenshots = (cypher: string, id: number) => {
        return `${this.reaApiUrl}/storage/animes/screenshots/${id}/${cypher}`;
    };
}
export const Utils = new UtilsClass();

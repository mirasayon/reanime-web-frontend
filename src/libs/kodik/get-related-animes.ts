import { shikimoriApi } from "#/providers/shikimori-api";
import type { AnimeRelationData } from "shikimoript/types/animes.js";

export const GetRelatedAnimes = async (sid: number): Promise<AnimeRelationData[]> => {
    try {
        const json = await shikimoriApi.animes.related({ id: sid });
        return json;
    } catch (error) {
        return [];
    }
};


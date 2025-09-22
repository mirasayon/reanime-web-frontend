import { shikimoriApi } from "#/providers/shikimori-api";
import type { AnimeRelationData } from "shikimoript/types/animes.js";

export const GetRelatedAnimes = async (sid: number): Promise<AnimeRelationData[]> => {
    try {
        return await shikimoriApi.animes.related({ id: sid });
    } catch {
        return await shikimoriApi.animes.related({ id: sid }).catch(() => []);
    }
};


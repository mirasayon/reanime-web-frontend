import { shikimoriApi } from "#/providers/shikimori-api";
import type { AnimeRelationData } from "shikimoript/types/animes.js";

export const GetRelatedAnimes = async (sid: number): Promise<AnimeRelationData[]> => {
    return await shikimoriApi.animes.related({ id: sid }).catch(() => []);
};


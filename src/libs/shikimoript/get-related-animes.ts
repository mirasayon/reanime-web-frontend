import { shikimoriApi } from "#/providers/shikimori-api";
import type { AnimeRelationData } from "shikimoript/types/animes.d.ts";

export const GetRelatedAnimes = async (sid: number): Promise<AnimeRelationData[]> => {
    return await shikimoriApi.animes.related({ id: sid }).catch(() => []);
};

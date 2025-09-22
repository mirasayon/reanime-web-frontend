import ms from "ms";
import { ShikimoriApi } from "shikimoript";
import type { AnimeRelationData } from "shikimoript/types/animes.js";
const shikimoriApi = new ShikimoriApi({
    clientName: "Reanime.art internal services",
    fetcher: async (url, options) => {
        const res = await fetch(url, { ...options, next: { revalidate: ms("2d") } });
        const txt = await res.text();
        return txt;
    },
});
export const GetRelatedAnimes = async (sid: number): Promise<AnimeRelationData[]> => {
    try {
        const json = await shikimoriApi.animes.related({ id: sid });
        // const json = await ResourseServiceFetcher<IShikimoriRelated[]>(`/animedb/related-animes/${sid}`);
        return json;
    } catch (error) {
        return [];
    }
};


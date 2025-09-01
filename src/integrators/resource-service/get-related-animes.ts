import type { IShikimoriRelated } from "&rs/shikimori-related.types";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";

export const GetRelatedAnimes = async (sid: number): Promise<IShikimoriRelated[]> => {
    try {
        const json = await ResourseServiceFetcher<IShikimoriRelated[]>(`/animedb/related-animes/${sid}`);
        return json;
    } catch (error) {
        return [];
    }
};

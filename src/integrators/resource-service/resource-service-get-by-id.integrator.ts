import type { IReady_Animes_DB } from "@reanime/resource-service/animes-db-types/ready-animes.types.js";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";

type ReturnTypeGetByID = Promise<IReady_Animes_DB | null>;

type shikimori_id_props = {
    /** Shikimori API ID */
    shikimori_id: number;
};

export const FindByIds = new (class ResService_Get_by_id {
    any_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<IReady_Animes_DB>(`/animedb/any_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };
    movie_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<IReady_Animes_DB>(`/animedb/movie_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };

    series_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<IReady_Animes_DB>(`/animedb/series_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };
})();

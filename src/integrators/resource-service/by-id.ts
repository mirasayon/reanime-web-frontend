import { JsonDB } from "#T/shared/json_db";
import { ResourseServiceFetcher } from "./fetcher";

type ReturnTypeGetByID = Promise<JsonDB.ftype | null>;

type shikimori_id_props = {
    /** Shikimori API ID */
    shikimori_id: number;
};

export const FindByIds = new (class ResService_Get_by_id {
    any_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<JsonDB.ftype>(`/animedb/any_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };
    movie_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<JsonDB.ftype>(`/animedb/movie_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };

    series_by_id = async ({ shikimori_id }: shikimori_id_props): ReturnTypeGetByID => {
        try {
            const json = await ResourseServiceFetcher<JsonDB.ftype>(`/animedb/series_by_id/${shikimori_id}`);
            return json;
        } catch (error) {
            return null;
        }
    };
})();

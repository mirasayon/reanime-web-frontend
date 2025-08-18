import { i_describe_genres, i_top_charts_anime_json } from "#T/userinserface";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";

export const ResService_InternalStatic = new (class ResService_InternalStatic {
    get_desc_genres = async (): Promise<i_describe_genres[]> => {
        try {
            const json = await ResourseServiceFetcher<i_describe_genres[]>(`/animedb/genres_pages`);
            return json;
        } catch (error) {
            return [];
        }
    };

    top_chart_animes = async (): Promise<i_top_charts_anime_json[]> => {
        try {
            const json = await ResourseServiceFetcher<i_top_charts_anime_json[]>(`/animedb/top_chart_animes`);
            return json;
        } catch (error) {
            return [];
        }
    };
})();

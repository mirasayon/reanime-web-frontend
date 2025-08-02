import { i_describe_genres, i_top_charts_anime_json } from "#T/userinserface";
import { fGet } from "./fetcher";

export const ResService_InternalStatic = new (class ResService_InternalStatic {
    get_desc_genres = async (): Promise<i_describe_genres[]> => {
        const json = await fGet.get<i_describe_genres[]>(`/animedb/genres_pages`);
        if (!json) {
            return [];
        }

        return json;
    };

    top_chart_animes = async (): Promise<i_top_charts_anime_json[]> => {
        const json = await fGet.get<i_top_charts_anime_json[]>(`/animedb/top_chart_animes`);
        if (!json) {
            return [];
        }
        return json;
    };
})();

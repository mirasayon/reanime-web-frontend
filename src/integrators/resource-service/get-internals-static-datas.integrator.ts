import type { IStaticDescribeGenres, IStaticTopChartAnimes } from "&rs/internal-statics";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";

export const r6DescribeGenres = async (): Promise<IStaticDescribeGenres[]> => {
    try {
        const json = await ResourseServiceFetcher<IStaticDescribeGenres[]>("/animedb/genres_pages");
        return json;
    } catch (error) {
        return [];
    }
};

export const r6TopChartAnimes = async (): Promise<IStaticTopChartAnimes[]> => {
    try {
        const json = await ResourseServiceFetcher<IStaticTopChartAnimes[]>("/animedb/top_chart_animes");
        return json;
    } catch (error) {
        return [];
    }
};


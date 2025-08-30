import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";

export const GetRelatedAnimes = async (sid: number): Promise<IShikimoriRelated[]> => {
    try {
        const json = await ResourseServiceFetcher<IShikimoriRelated[]>(`/animedb/related-animes/${sid}`);
        return json;
    } catch (error) {
        return [];
    }
};
// };
export interface IShikimoriRelated {
    relation: string;
    relation_russian: string;
    anime: null | {
        id: number;
        name: string;
        russian: string;
        image: null | {
            original: string;
            preview: string;
            x96: string;
            x48: string;
        };
        url: string;
        kind: "tv" | "movie" | "special" | "ona";
        score: string;
        status: "released" | "anons" | "ongoing";
        episodes: number;
        episodes_aired: number;
        aired_on: string;
        released_on: null | string;
    };
    manga: null | {
        id: number;
        name: string;
        russian: string;
        image: {
            original: string;
            preview: string;
            x96: string;
            x48: string;
        };
        url: string;
        kind: "light_novel" | "manga";
        score: string;
        status: "released" | "anons" | "ongoing";
        volumes: number;
        chapters: number;
        aired_on: string;
        released_on: null | string;
    };
}


import type { paginated } from "#T/apis/resource_service_integrator";
import type { JsonDB } from "#T/shared/json_db";
import type { i_describe_genres, i_top_charts_anime_json } from "#T/userinserface";
import { EnvConfig } from "#/configs/env";
const fGet = new (class Fetcher {
    private baseUrl = EnvConfig.partners.resource_service.url.current;
    get = async <T>(url: URL | string) => {
        try {
            const res = await fetch(`${this.baseUrl}${url}`, {
                method: "GET",
                cache: EnvConfig.mode.prod ? "force-cache" : "no-cache",
                next: { revalidate: EnvConfig.mode.prod ? 86400 : 0 /** 24 Hours */ },
                headers: {
                    "x-resource-service-api-key": EnvConfig.partners.resource_service.api_key,
                },
            });
            if (res.status === 200) {
                return (await res.json()).data as T;
            }
            if (res.status === 404) {
                return null;
            }
            throw new Error(
                `Unknown Error happened while fetching data from the API: Status: ${res.status}, statusText: ${res.statusText}. statusCode: ${res.status}`,
            );
        } catch (error) {
            console.error(error);
            return null;
        }
    };
})();

class Categories {
    series = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/series?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };

    movie = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/movie?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };

    released = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/released?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };

    list_all = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/list_all?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };
    popular = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/popular?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };

    this_year = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/this_year?page=${page}&interval=${interval}`);
        if (!json) {
            return [];
        }
        return json;
    };

    ongoing = async (page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/categories/ongoing?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };
}

class Core {
    byid = new Get_by_id();
    by_genre = async (genre: string, page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/genre/${genre}?page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };
    search = async (search_query: string, page: number, interval = 40) => {
        const json = await fGet.get<paginated>(`/animedb/search?search_query=${search_query}&page=${page}&interval=${interval}`);
        if (!json) {
            return null;
        }
        return json;
    };
}

class Get_by_id {
    any_by_id = async (shikimori_id: number) => {
        const json = await fGet.get<JsonDB.ftype>(`/animedb/any_by_id/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };
    movie_by_id = async (shikimori_id: number) => {
        const json = await fGet.get<JsonDB.ftype>(`/animedb/movie_by_id/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };

    series_by_id = async (shikimori_id: number) => {
        const json = await fGet.get<JsonDB.ftype>(`/animedb/series_by_id/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };
}

class Internals {
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
}

export const Reanime_Resource_Service_Api_Integrator = new (class ReanimeAPIClass {
    core = new Core();
    cate = new Categories();
    internals = new Internals();
})();

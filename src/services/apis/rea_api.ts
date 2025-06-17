import type { paginated } from "#T/apis/rea_api";
import type { JsonDB } from "#T/shared/json_db";
import type { i_describe_genres, i_top_charts_anime_json } from "#T/userinserface";
import { EnvConfig } from "#/configs/env";
import { ApplicationConfig } from "#/configs/application";
const root = ApplicationConfig.api_current_url;
// const root = EnvConfig.mode.prod ? EnvConfig.server.urls.api.prod : EnvConfig.server.urls.api.dev;
class Fetcher {
    get = async <T>(url: URL | string) => {
        try {
            const res = await fetch(`${root}${url}`, {
                method: "GET",
                // cache: "no-store",
                next: { revalidate: 86400 /** 24 Hours */ },
                headers: {
                    "x-rs-api-key": EnvConfig.server.secrets.api,
                },
            });
            if (res.status === 200) {
                return (await res.json()).data as T;
            }
            if (res.status === 404) {
                return null;
            }
            throw new Error(
                `Unknown Error happened while fetching data from the API: Status: ${res.status}, msg: ${res.statusText}. body: ${JSON.stringify(await res.json())}`,
            );
        } catch (error) {
            console.error(error);
            return null;
        }
    };
}
const f = new Fetcher();

class Categories {
    serials = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/serials?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };

    movies = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/movies?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };

    released = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/released?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };

    list_all = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/list_all?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };
    populars = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/populars?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };

    this_year = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/this_year?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return [];
        }
        return json;
    };

    ongoings = async (page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/categories/ongoings?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };
}

class Core {
    byid = new Byid();
    by_genre = async (genre: string, page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/genre/${genre}?page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };
    search = async (search_query: string, page: number, interval = 40) => {
        const json = await f.get<paginated>(
            `/v1/animes/search?search_query=${search_query}&page=${page}&interval=${interval}`,
        );
        if (!json) {
            return null;
        }
        return json;
    };
}

class Byid {
    any = async (shikimori_id: number) => {
        const json = await f.get<JsonDB.ftype>(`/v1/animes/id/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };
    movie = async (shikimori_id: number) => {
        const json = await f.get<JsonDB.ftype>(`/v1/animes/movie/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };

    serial = async (shikimori_id: number) => {
        const json = await f.get<JsonDB.ftype>(`/v1/animes/serial/${shikimori_id}`);
        if (!json) {
            return null;
        }
        return json;
    };
}

class Internals {
    desc_genres = async (): Promise<i_describe_genres[]> => {
        const json = await f.get<i_describe_genres[]>(`/v1/animes/genres_pages`);
        if (!json) {
            return [];
        }

        return json;
    };

    TopChartAnimes = async (): Promise<i_top_charts_anime_json[]> => {
        const json = await f.get<i_top_charts_anime_json[]>(`/v1/animes/top_chart_animes`);
        if (!json) {
            return [];
        }
        return json;
    };
}
class ReanimeAPIClass {
    core = new Core();
    cate = new Categories();
    internals = new Internals();
}

export const ReaApi = new ReanimeAPIClass();

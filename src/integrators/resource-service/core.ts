import { paginated } from "#T/apis/resource_service_integrator";
import { JsonDB } from "#T/shared/json_db";
import { fGet } from "./fetcher";

export class ResService_Core {
    byid = new ResService_Get_by_id();
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

export class ResService_Get_by_id {
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

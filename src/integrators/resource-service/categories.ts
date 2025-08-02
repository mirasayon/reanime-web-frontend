import { paginated } from "#T/apis/resource_service_integrator";
import { fGet } from "./fetcher";

export const ResService_Categories = new (class ResService_Categories {
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
})();

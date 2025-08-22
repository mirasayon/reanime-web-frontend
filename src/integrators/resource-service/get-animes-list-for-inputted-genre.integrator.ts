import type { paginated } from "#T/apis/resource_service_integrator";
import type { AwaitedNextSQ } from "#T/next";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";
import { ValidateSearchQueryForGenres } from "./validators/validate-searchquery-for-genres";

type ResCateReturnTypes = Promise<{ input: ReturnType<typeof ValidateSearchQueryForGenres>; data: paginated } | null>;

export const by_genre = async (searchquery: AwaitedNextSQ, _genre: string): ResCateReturnTypes => {
    try {
        const input = ValidateSearchQueryForGenres(searchquery, _genre);
        const data = await ResourseServiceFetcher<paginated>(`/animedb/genre/${input.genre}?page=${input.current_page}&interval=${input.page_size}`);

        return { data, input };
    } catch (error) {
        return null;
    }
};

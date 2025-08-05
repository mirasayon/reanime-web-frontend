import { paginated } from "#T/apis/resource_service_integrator";
import { AwaitedNextSQ } from "#T/next";
import { ResourseServiceFetcher } from "./fetcher";
import { ValidateSearchQueryForSearch } from "./validators/validate-searchquery-for-search";
type ResCateReturnTypes = Promise<{ input: ReturnType<typeof ValidateSearchQueryForSearch>; data: paginated } | null>;

export const search = async (search_query: AwaitedNextSQ): ResCateReturnTypes => {
    try {
        const input = ValidateSearchQueryForSearch(search_query);
        const data = await ResourseServiceFetcher<paginated>(
            `/animedb/search?search_query=${input.search_query}&page=${input.current_page}&interval=${input.page_size}`,
        );
        return { data, input };
    } catch (error) {
        return null;
    }
};

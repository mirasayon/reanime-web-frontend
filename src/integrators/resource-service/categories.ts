import type { paginated } from "#T/apis/resource_service_integrator";
import type { AwaitedNextSQ } from "#T/next";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";
import { ValidateSearchQuery } from "./validators/validate-searchquery-for-resource-service";
type ResCateReturnTypes = Promise<{ input: ReturnType<typeof ValidateSearchQuery>; data: paginated } | null>;
/** `res service`/categories */
export const ResService_Categories = new (class ResService_Categories {
    series = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(`/animedb/categories/series?page=${input.current_page}&interval=${input.page_size}`);
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    movie = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(`/animedb/categories/movie?page=${input.current_page}&interval=${input.page_size}`);
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    released = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(
                `/animedb/categories/released?page=${input.current_page}&interval=${input.page_size}`,
            );
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    // list_all = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
    //     try {
    //         const input = ValidateSearchQuery(sq);
    //         const data = await ResourseServiceFetcher<paginated>(`/animedb/list_all?page=${input.current_page}&interval=${input.page_size}`);
    //         return { input, data };
    //     } catch (error) {
    //         return null;
    //     }
    // };
    popular = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(
                `/animedb/categories/popular?page=${input.current_page}&interval=${input.page_size}`,
            );
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    this_year = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(
                `/animedb/categories/this_year?page=${input.current_page}&interval=${input.page_size}`,
            );
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    ongoing = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await ResourseServiceFetcher<paginated>(
                `/animedb/categories/ongoing?page=${input.current_page}&interval=${input.page_size}`,
            );
            return { input, data };
        } catch (error) {
            return null;
        }
    };
})();


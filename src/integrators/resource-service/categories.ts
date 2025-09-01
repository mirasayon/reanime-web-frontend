import type { AwaitedNextSQ } from "#T/nextjs";
import type { ListResponse } from "kodik-api-simplified/resources";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";
type paginated = ListResponse;
type ResCateReturnTypes = Promise<{ input: ReturnType<typeof ValidateSearchQuery>; data: paginated } | null>;
/** `res service`/categories */
export const kodikCategories = new (class ResService_Categories {
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

import { UserServiceConfig } from "#/settings/resource-service";

type ReturnTypes = { page_size: number; current_page: number };

export function ValidateSearchQuery(searchParams: AwaitedNextSQ): ReturnTypes {
    const page_size = Number(searchParams.pagesize) || UserServiceConfig.default_page_size;
    const current_page = Number(searchParams.page) || 1;
    if (page_size > UserServiceConfig.maxLimitPageSize || page_size < 1) {
        throw new Error("Max page size exceed");
    }

    return { page_size, current_page };
}


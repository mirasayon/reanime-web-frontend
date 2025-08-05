import { UserServiceConfig } from "#/settings/resource-service";
import { AwaitedNextSQ } from "#T/next";

type ReturnTypes = { page_size: number; current_page: number; search_query: string };

export function ValidateSearchQueryForSearch(searchParams: AwaitedNextSQ): ReturnTypes {
    const page_size = Number(searchParams.pagesize) || UserServiceConfig.default_page_size;
    const current_page = Number(searchParams.page) || 1;
    if (page_size > UserServiceConfig.maxLimitPageSize || page_size < 1) {
        throw new Error("Max page size exceed");
    }

    const search_query = searchParams.search_query as string | undefined;
    if (!search_query || !/\S/.test(search_query)) {
        throw new Error("Invalid search query");
    }
    const raw_query = decodeURI(search_query);
    return { page_size, current_page, search_query: raw_query };
}

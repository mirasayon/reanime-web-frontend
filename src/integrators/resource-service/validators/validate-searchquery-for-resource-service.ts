import { UserServiceConfig } from "#/settings/resource-service";
import { AwaitedNextSQ } from "#T/next";

type ReturnTypes = { page_size: number; current_page: number };

export function ValidateSearchQuery(searchParams: AwaitedNextSQ): ReturnTypes {
    const page_size = Number(searchParams.pagesize) || UserServiceConfig.default_page_size;
    const current_page = Number(searchParams.page) || 1;
    if (page_size > UserServiceConfig.maxLimitPageSize || page_size < 1) {
        throw new Error("Max page size exceed");
    }

    return { page_size, current_page };
}

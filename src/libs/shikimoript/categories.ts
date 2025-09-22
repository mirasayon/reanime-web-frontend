import type { AwaitedNextSQ } from "#T/nextjs";
import { UserServiceConfig } from "#/settings/resource-service";
import { shikimoriApi } from "#/providers/shikimori-api";
import { this_year } from "#/constants/common.constants";
import type { AnimeBasicData } from "shikimoript/types/animes.js";
type paginated = AnimeBasicData[];
type ResCateReturnTypes = Promise<{ input: ReturnType<typeof ValidateSearchQuery>; data: paginated } | null>;
/** `res service`/categories */
export const kodikCategories = new (class ResService_Categories {
    series = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ kind: "tv" });
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    movie = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ kind: "movie" });
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    released = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ status: "released" });
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    popular = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ order: "popularity" });
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    this_year = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ season: `${this_year}` });
            return { input, data };
        } catch (error) {
            return null;
        }
    };

    ongoing = async (sq: AwaitedNextSQ): ResCateReturnTypes => {
        try {
            const input = ValidateSearchQuery(sq);
            const data = await shikimoriApi.animes.list({ status: "ongoing" });
            return { input, data };
        } catch (error) {
            return null;
        }
    };
})();

type ReturnTypes = { page_size: number; current_page: number };

export function ValidateSearchQuery(searchParams: AwaitedNextSQ): ReturnTypes {
    const page_size = Number(searchParams.pagesize) || UserServiceConfig.default_page_size;
    const current_page = Number(searchParams.page) || 1;
    if (page_size > UserServiceConfig.maxLimitPageSize || page_size < 1) {
        throw new Error("Max page size exceed");
    }

    return { page_size, current_page };
}


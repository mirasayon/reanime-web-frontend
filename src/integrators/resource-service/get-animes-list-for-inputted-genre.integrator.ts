import { kodikApiSSR } from "#/providers/kodik-api-client";
import type { AwaitedNextSQ } from "#T/next";
import type { GenresResponse, ListResponse } from "kodik-api-simplified/resources";
import { ValidateSearchQueryForGenres } from "./validators/validate-searchquery-for-genres";

type ResCateReturnTypes = Promise<ListResponse | null>;

export const by_genre = async (_genre: string): ResCateReturnTypes => {
    try {
        const data = await (
            await kodikApiSSR()
        ).list({
            types: ["anime", "anime-serial"],
            all_genres: _genre,
        });

        return data;
    } catch (error) {
        return null;
    }
};


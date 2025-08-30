import { getKodikApi } from "#/providers/kodik-api-client";
import type { ListResponse } from "kodik-api-simplified/resources";

type ResCateReturnTypes = Promise<ListResponse | null>;

export const by_genre = async (_genre: string): ResCateReturnTypes => {
    try {
        const data = await (
            await getKodikApi()
        ).list({
            types: ["anime", "anime-serial"],
            all_genres: _genre,
        });

        return data;
    } catch (error) {
        return null;
    }
};


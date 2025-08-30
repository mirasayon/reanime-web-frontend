import { getKodikApi } from "#/providers/kodik-api-client";
import type { ListResponse } from "kodik-api-simplified/resources";
import { Logger } from "log-it-colored";

type ResCateReturnTypes = Promise<ListResponse | null>;

export const kodikByGenre = async (genre: string): ResCateReturnTypes => {
    try {
        const data = await (
            await getKodikApi()
        ).list({
            types: ["anime", "anime-serial"],
            anime_genres: genre,
            limit: 100,
            has_field: "shikimori_id",
        });
        return data;
    } catch (error) {
        return null;
    }
};


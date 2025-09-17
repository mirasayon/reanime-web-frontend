import { getKodikApi } from "#/providers/kodik-api-client";
import type { ListResponse } from "kodik/types";

type kodikByGenreRT = Promise<ListResponse | null>;

export const kodikByGenre = async (genre: string): kodikByGenreRT => {
    try {
        const data = await (
            await getKodikApi()
        ).list({
            types: ["anime", "anime-serial"],
            with_material_data: true,
            anime_genres: genre,
            sort: "year",
            limit: 100,
            has_field: "shikimori_id",
        });
        return data;
    } catch (error) {
        return null;
    }
};


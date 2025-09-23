"use server";
import { getKodikApi } from "#/providers/kodik-api";
export async function getAnyByShikimoriFromKodikApi(id: number) {
    try {
        const res = await (
            await getKodikApi()
        ).search({
            shikimori_id: id,
            has_field: "shikimori_id",
            with_material_data: true,
            limit: 1,
            types: ["anime", "anime-serial"],
        });
        const anime = res.results[0] || null;
        return anime;
    } catch {
        return null;
    }
}


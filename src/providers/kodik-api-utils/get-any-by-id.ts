"use server";

import { kodikApiSSR } from "../kodik-api-client";

export async function getAnyByShikimoriFromKodikApi(id: number) {
    const res = await (
        await kodikApiSSR()
    ).search({
        shikimori_id: id,
        has_field: "shikimori_id",
        with_material_data: true,
        limit: 1,
        types: ["anime", "anime-serial"],
    });
    const anime = res.results[0] || null;
    return anime;
}

"use server";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utility-components";
import { kodikClient } from "#/providers/kodik-api";
import { topChartAnimesStaticData } from "#/constants/anime-genres/top-chart-animes.static";
import { dedupeAnimes } from "#/utils/reducer-deduper";

export default async function __Home_RootPage() {
    const { results } = await kodikClient.list({
        with_material_data: true,
        limit: 100,
        has_field: "shikimori_id",
        order: "desc",
        sort: "shikimori_rating",
        types: ["anime", "anime-serial"],
    });
    return (
        <>
            <AnimeMainPageCarousel animes={topChartAnimesStaticData} />
            <Anime_List_Component data={dedupeAnimes(results)} />
        </>
    );
}

"use server";
import type { SearchParams } from "#T/nextjs";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utility-components";
import { kodikClient } from "#/providers/kodik-api";
import { topChartAnimesStaticData } from "#/constants/anime-genres/top-chart-animes.static";
import { dedupeAnimes } from "#/utils/reducer-deduper";

export default async function __Home_RootPage({ searchParams }: { searchParams: SearchParams }) {
    // const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    const searchPms = await searchParams;
    const kodikResponse = await kodikClient.list({
        with_material_data: true,
        limit: Number(searchPms.limit) || 100,
        has_field: "shikimori_id",
        order: "desc",
        sort: "shikimori_rating",
        types: ["anime", "anime-serial"],
    });
    const { results: data } = kodikResponse;
    return (
        <>
            {/* <Welcome_for_home_page logged={!!auth} /> */}
            <AnimeMainPageCarousel animes={topChartAnimesStaticData} />
            <Anime_List_Component data={dedupeAnimes(data)} />
        </>
    );
}

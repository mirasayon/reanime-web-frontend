"use server";
import type { SearchParams } from "#T/nextjs";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { getKodikApi } from "#/providers/kodik-api-client";
import { topChartAnimesStaticData } from "#/static-but-it-is-typescript/top-chart-animes.static";
import { dedupeAnimes } from "#/utils/reducer-deduper";

export default async function __Home_RootPage({ searchParams }: { searchParams: SearchParams }) {
    const envA = await loadEnvFile();
    // const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    const searchPms = await searchParams;
    const kodikResponse = await (
        await getKodikApi()
    ).list({
        with_material_data: true,
        limit: Number(searchPms.limit) || 100,
        has_field: "shikimori_id",
        order: "desc",
        next: "WzkuMCwic2VyaWFsLTQ2MjQwIl0=",
        sort: "shikimori_rating",
        types: ["anime", "anime-serial"],
    });
    const { results: data, prev_page, next_page, total } = kodikResponse;
    return (
        <>
            {/* <Welcome_for_home_page logged={!!auth} /> */}
            <AnimeMainPageCarousel animes={topChartAnimesStaticData} resServerUrl={envA.resource_service.url} />
            <Anime_List_Component kodiks={dedupeAnimes(data)} resUrl={envA.resource_service.url} />
        </>
    );
}


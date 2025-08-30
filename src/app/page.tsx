"use server";
import type { SearchParams } from "#T/next.ts";
import { type MaterialObject } from "kodik-api-simplified/index";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";
import { cookies, headers } from "next/headers";
import { Welcome_for_home_page } from "#/components/info/welcome-text-for-home-page";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { getKodikApi } from "#/providers/kodik-api-client";
import { dedupeAnimes } from "#/libs/kodik-wrapper-utils/reducer-deduper";

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
            <AnimeMainPageCarousel animes={await ResServiceApi.internals.top_chart_animes()} resServerUrl={envA.resource_service.url} />
            <Anime_List_Component kodiks={dedupeAnimes(data)} resUrl={envA.resource_service.url} />
        </>
    );
}


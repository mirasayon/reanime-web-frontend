"use server";
import type { SearchParams } from "#T/next.ts";
import { notFound } from "next/navigation";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";
import { cookies, headers } from "next/headers";
import { Welcome_for_home_page } from "#/components/info/welcome-text-for-home-page";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { LoadConfig } from "#/configs/environment-variables.main-config";
import { PaginationWithLinks } from "#/components/anime_page/pagination/utility-pagination";

export default async function __Home_RootPage({ searchParams }: { searchParams: SearchParams }) {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    const res = await ResServiceApi.categories.list_all(await searchParams);
    if (!res) {
        return notFound();
    }

    const { data, input } = res;
    return (
        <>
            <Welcome_for_home_page logged={!!auth} />
            <AnimeMainPageCarousel
                animes={await ResServiceApi.internals.top_chart_animes()}
                resServerUrl={(await LoadConfig()).partners.resource_service.url}
            />
            <Anime_List_Component kodiks={data.paginated} resUrl={(await LoadConfig()).partners.resource_service.url} />
            <PaginationWithLinks pageSearchParam="page" totalCount={data.total_length} page={input.current_page} pageSize={input.page_size} />
        </>
    );
}


import { UtilityJSX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { NextJS_Types } from "#T/next";
import { notFound } from "next/navigation";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { cookies, headers } from "next/headers";
import { Welcome_for_home_page } from "#/components/info/welcome-text-for-home-page";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { AnimePaginationLinks } from "#/components/anime_page/pagination/anime-pagination-links";

export default async function RootPage({ searchParams }: { searchParams: NextJS_Types.SearchParams }) {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });

    const res = await ResServiceApi.categories.list_all(await searchParams);
    if (!res) {
        return notFound();
    }
    const { data, input } = res;
    return (
        <>
            <Welcome_for_home_page logged={!!auth} />
            <AnimeMainPageCarousel animes={await ResServiceApi.internals.top_chart_animes()} />
            <UtilityJSX.Anime_List_Component kodiks={data.paginated} />
            <AnimePaginationLinks totalPages={data.total_length} currentPage={input.current_page} pageSize={input.page_size} />
        </>
    );
}

import { redirect } from "next/navigation";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { NextJS_Types } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website";
import { ResServiceApi } from "#/integrators/resource-service/index";
import { AnimePaginationLinks } from "#/components/anime_page/pagination/anime-pagination-links";

export default async function Root_search_page({ searchParams }: { searchParams: NextJS_Types.SearchParams }) {
    const res = await ResServiceApi.search(await searchParams);

    if (!res) {
        return <Found_no_animes />;
    }
    const { data, input } = res;
    return (
        <>
            <UtilityJSX.Anime_List_Component kodiks={data.paginated} />
            <AnimePaginationLinks totalPages={data.total_length} currentPage={input.current_page} pageSize={input.page_size} />
        </>
    );
}

export async function generateMetadata({ searchParams }: { searchParams: NextJS_Types.SearchParams }): Promise<Metadata> {
    const sq = (await searchParams).q;
    return {
        title: `Поиск по запросу \"${sq}\" | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

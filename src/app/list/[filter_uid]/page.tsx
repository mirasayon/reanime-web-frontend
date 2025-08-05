import { UtilityJSX } from "#/components/utilities/x_components";
import { notFound } from "next/navigation";
import type { NextJS_Types } from "#T/next";
import type { Metadata } from "next";
import { ResServiceApi } from "#/integrators/resource-service/index";
import { filters_uids, list_anime_ru, metadata404 } from "#/constants/common.constants";
import { AnimePaginationLinks } from "#/components/anime_page/pagination/anime-pagination-links";
import { WebsiteConfigs } from "#/configs/website";

export type filter_search_params = keyof typeof list_anime_ru;
export default async function List_Page({
    params,
    searchParams,
}: {
    params: NextJS_Types.Params<{ filter_uid: string }>;
    searchParams: NextJS_Types.SearchParams;
}) {
    const filter = (await params).filter_uid as filter_search_params;
    if (!filters_uids.includes(filter)) {
        return notFound();
    }
    type c = keyof typeof ResServiceApi.categories;
    const res = await ResServiceApi.categories[filter as c](await searchParams);
    if (!res) {
        return notFound();
    }
    const { data, input } = res;
    return (
        <>
            <UtilityJSX.Anime_List_Component kodiks={data.paginated} />
            <AnimePaginationLinks totalPages={data.total_length} currentPage={input.current_page} pageSize={input.page_size} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ filter_uid: string }> }): Promise<Metadata> {
    const filter = (await params).filter_uid as filter_search_params;
    if (!filters_uids.includes(filter)) {
        return metadata404;
    }
    const desc = list_anime_ru[filter];
    return {
        title: `${desc} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

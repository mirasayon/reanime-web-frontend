import { notFound } from "next/navigation";
import type { IPageParams, SearchParams } from "#T/next";
import type { Metadata } from "next";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { filters_uids, list_anime_ru, metadata404 } from "#/constants/common.constants";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { RadioGroupSelectCategory } from "./radio-group-select-category";
import { _categories } from "#/static/anime_categories";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { PaginationWithLinks } from "#/components/anime_page/pagination/utility-pagination";

export type filter_search_params = keyof typeof list_anime_ru;
export default async function List_Page({ params, searchParams }: { params: IPageParams<{ filter_uid: string }>; searchParams: SearchParams }) {
    const filter = (await params).filter_uid as filter_search_params;
    if (!filters_uids.includes(filter)) {
        return notFound();
    }
    type c = keyof typeof ResServiceApi.categories;
    const res = await ResServiceApi.categories[filter as c](await searchParams);
    if (!res) {
        return notFound();
    }

    const res_url = (await loadEnvFile()).resource_service.url;
    const { data, input } = res;
    return (
        <>
            <h1 className=" font-bold text-center border-b-4 border-blue-300">
                По категориям: {_categories.find((w) => w.link_url.includes(filter))?.title}
            </h1>
            <RadioGroupSelectCategory current={filter} />
            <Anime_List_Component resUrl={res_url} kodiks={data.paginated} />
            <PaginationWithLinks totalCount={data.total_length} page={input.current_page} pageSize={input.page_size} pageSearchParam="page" />
        </>
    );
}

export async function generateMetadata({ params }: { params: IPageParams<{ filter_uid: string }> }): Promise<Metadata> {
    const filter = (await params).filter_uid as filter_search_params;
    if (!filters_uids.includes(filter)) {
        return metadata404;
    }
    const desc = list_anime_ru[filter];
    return {
        title: `${desc} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}


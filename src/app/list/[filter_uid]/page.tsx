import { UtilityJSX } from "#/components/utilities/x_components";
import { notFound } from "next/navigation";
import { Current_page_switcher } from "#/components/anime_page/current_page_switcher";
import type { NextTN } from "#T/next";
import { ApplicationConfig } from "#/configs/application";
import type { Metadata } from "next";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";
import { paginated } from "#T/apis/resource_service_integrator";

export type filter_search_params = keyof typeof ApplicationConfig.list_anime_ru;
export default async function List_Page({
    params,
    searchParams,
}: {
    params: NextTN.Params<{ filter_uid: string }>;
    searchParams: NextTN.SearchParams;
}) {
    const filter = (await params).filter_uid as filter_search_params;
    if (!ApplicationConfig.filters_uids.includes(filter)) {
        return notFound();
    }
    type c = keyof typeof Reanime_Resource_Service_Api_Integrator.cate;
    const _p = (await Reanime_Resource_Service_Api_Integrator.cate[filter as c](
        Number((await searchParams).c_page) || 1,
    )) as paginated;
    if (!_p) {
        return notFound();
    }

    return (
        <>
            <Current_page_switcher
                is_start_now={_p.is_start_now}
                current_page={_p.current_page}
                is_over_now={_p.is_over_now}
            />
            <UtilityJSX.Anime_List_Component render_images={true} kodiks={_p.paginated} />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: NextTN.Params<{ filter_uid: string }>;
}): Promise<Metadata> {
    const filter = (await params).filter_uid as filter_search_params;
    if (!ApplicationConfig.filters_uids.includes(filter)) {
        return ApplicationConfig.metadata404;
    }
    const desc = ApplicationConfig.list_anime_ru[filter];
    return {
        title: `Категории: ${desc}`,
    } satisfies Metadata;
}

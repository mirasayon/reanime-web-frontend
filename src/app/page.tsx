import { ChartCarouselWrapper } from "#/components/animes/chart_animes_wrapper";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Current_page_switcher } from "#/components/anime_page/current_page_switcher";
import type { NextJS_Types } from "#T/next";
import { notFound } from "next/navigation";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { cookies, headers } from "next/headers";
import { Welcome_for_home_page } from "#/components/info/welcome";
export default async function RootPage({ searchParams }: { searchParams: NextJS_Types.SearchParams }) {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    const page = Number((await searchParams).c_page) || 1;
    const _paginated_list = await Reanime_Resource_Service_Api_Integrator.cate.list_all(page);
    if (!_paginated_list) {
        return notFound();
    }
    return (
        <>
            <Welcome_for_home_page logged={!!auth} />
            <ChartCarouselWrapper animes={await Reanime_Resource_Service_Api_Integrator.internals.top_chart_animes()} />
            <UtilityJSX.Anime_List_Component render_images={true} kodiks={_paginated_list.paginated} />
            <Current_page_switcher
                is_start_now={_paginated_list.is_start_now}
                current_page={_paginated_list.current_page}
                is_over_now={_paginated_list.is_over_now}
            />
        </>
    );
}

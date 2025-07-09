import { ChartCarouselWrapper } from "#/components/animes/chart_animes_wrapper";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Current_page_switcher } from "#/components/anime_page/current_page_switcher";
import type { NextTN } from "#T/next";
import { notFound } from "next/navigation";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";

export default async function RootPage({ searchParams }: { searchParams: NextTN.SearchParams }) {
    const page = Number((await searchParams).c_page) || 1;
    const p_ = await Reanime_Resource_Service_Api_Integrator.cate.list_all(page);
    if (!p_) {
        return notFound();
    }
    return (
        <>
            {/* <Welcome_for_home_page is_guest={is_guest} /> */}
            <ChartCarouselWrapper
                animes={await Reanime_Resource_Service_Api_Integrator.internals.top_chart_animes()}
            />
            <UtilityJSX.Anime_List_Component render_images={true} kodiks={p_.paginated} />
            <Current_page_switcher
                is_start_now={p_.is_start_now}
                current_page={p_.current_page}
                is_over_now={p_.is_over_now}
            />
        </>
    );
}

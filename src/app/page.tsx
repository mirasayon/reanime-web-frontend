import { ChartCarouselWrapper } from "#/components/animes/chart_animes_wrapper";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Welcome_for_home_page } from "#/components/info/welcome";
import {
    ServerSide_get_avatar_cookies,
    ServerSideThemeCookie,
} from "#/components/hooks/server_side_cookies";
import { Current_page_switcher } from "#/components/components/current_page_switcher";
import { ReaApi } from "#/services/apis/rea_api";
import type { NextTN } from "#T/next";
import { notFound } from "next/navigation";
import type { JSX } from "react";

export default async function RootPage({
    searchParams,
}: {
    searchParams: NextTN.SearchParams;
}): Promise<JSX.Element> {
    const { is_dark } = await ServerSideThemeCookie();
    const { is_guest } = await ServerSide_get_avatar_cookies();
    const page = Number((await searchParams).c_page) || 1;
    const p_ = await ReaApi.cate.list_all(page);
    if (!p_) {
        return notFound();
    }
    return (
        <>
            <Welcome_for_home_page is_guest={is_guest} />
            <ChartCarouselWrapper animes={await ReaApi.internals.TopChartAnimes()} />
            <UtilityJSX.Anime_List_Component
                render_images={true}
                is_dark={is_dark}
                kodiks={p_.paginated}
            />
            <Current_page_switcher
                is_start_now={p_.is_start_now}
                current_page={p_.current_page}
                is_over_now={p_.is_over_now}
            />
        </>
    );
}

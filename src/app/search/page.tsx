import { redirect } from "next/navigation";
import type { JSX } from "react";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import { ReaApi } from "#/services/apis/rea_api";
import { Current_page_switcher } from "#/components/components/current_page_switcher";
import type { NextTN } from "#T/next";
import type { Metadata } from "next";
import { ApplicationConfig } from "#/configs/application";
import { WebsiteConfigs } from "#/configs/website";

export default async function Root_search_page({
    searchParams,
}: {
    searchParams: NextTN.SearchParams;
}): Promise<JSX.Element> {
    const sq = await searchParams;
    const search_query = sq.search_query as string | undefined;
    const { is_dark } = await ServerSideThemeCookie();
    if (!search_query || !/\S/.test(search_query)) {
        return redirect("/");
    }
    const page = sq.c_page ? Number(sq.c_page) || 1 : 1;
    const raw_query = decodeURI(search_query);
    const p_ = await ReaApi.core.search(raw_query, page);

    if (!p_) {
        return <Found_no_animes is_dark={is_dark} />;
    }
    return (
        <>
            <UtilityJSX.Anime_List_Component
                is_dark={is_dark}
                kodiks={p_.paginated}
                render_images={true}
            />
            <Current_page_switcher
                is_start_now={p_.is_start_now}
                current_page={p_.current_page}
                is_over_now={p_.is_over_now}
            />
        </>
    );
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: NextTN.SearchParams;
}): Promise<Metadata> {
    const sq = (await searchParams).q;
    return {
        title: `Поиск по запросу \"${sq}\" | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

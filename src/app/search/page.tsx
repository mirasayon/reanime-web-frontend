import { redirect } from "next/navigation";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import { Current_page_switcher } from "#/components/anime_page/current_page_switcher";
import type { NextJS_Types } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";

export default async function Root_search_page({
    searchParams,
}: {
    searchParams: NextJS_Types.SearchParams;
}) {
    const sq = await searchParams;
    const search_query = sq.search_query as string | undefined;
    if (!search_query || !/\S/.test(search_query)) {
        return redirect("/");
    }
    const page = sq.c_page ? Number(sq.c_page) || 1 : 1;
    const raw_query = decodeURI(search_query);
    const p_ = await Reanime_Resource_Service_Api_Integrator.core.search(raw_query, page);

    if (!p_) {
        return <Found_no_animes />;
    }
    return (
        <>
            <UtilityJSX.Anime_List_Component kodiks={p_.paginated} render_images={true} />
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
    searchParams: NextJS_Types.SearchParams;
}): Promise<Metadata> {
    const sq = (await searchParams).q;
    return {
        title: `Поиск по запросу \"${sq}\" | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

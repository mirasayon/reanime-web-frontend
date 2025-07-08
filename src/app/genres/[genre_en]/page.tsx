import { UtilityJSX } from "#/components/utilities/x_components";
import { rea_wrapper_border } from "#/styles/provider";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { notFound } from "next/navigation";
import React from "react";
import { Current_page_switcher } from "#/components/components/current_page_switcher";
import type { NextTN } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";
export default async function GenresPage({
    params,
    searchParams,
}: {
    params: NextTN.Params<{ genre_en: string }>;
    searchParams: NextTN.SearchParams;
}) {
    const p = await params;
    const sp = await searchParams;
    const genre_en = decodeURI(p.genre_en);
    const desc = (await Reanime_Resource_Service_Api_Integrator.internals.get_desc_genres()).find(
        (g) => g.english_name.toLowerCase() === genre_en,
    );
    if (!desc) {
        return notFound();
    }
    const { is_dark } = await ServerSideThemeCookie();
    const _p = await Reanime_Resource_Service_Api_Integrator.core.by_genre(
        genre_en,
        Number(sp.c_page) || 1,
    );
    if (!_p) {
        return notFound();
    }
    return (
        <>
            <div className={`min-h-[200px] ${rea_wrapper_border}`}>
                <div className={" m-4 text-xl"}>
                    {desc.russian_name} - {desc.description}
                </div>
            </div>
            <Current_page_switcher
                is_start_now={_p.is_start_now}
                current_page={_p.current_page}
                is_over_now={_p.is_over_now}
            />
            <UtilityJSX.Anime_List_Component
                render_images={true}
                is_dark={is_dark}
                kodiks={_p.paginated}
            />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: NextTN.Params<{ genre_en: string }>;
}): Promise<Metadata> {
    const genre_en = decodeURI((await params).genre_en);
    const desc = (await Reanime_Resource_Service_Api_Integrator.internals.get_desc_genres()).find(
        (g) => g.english_name.toLowerCase() === genre_en,
    );
    if (!desc) {
        return notFound();
    }
    return {
        title: `По жанру: ${desc.russian_name} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

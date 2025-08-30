"use server";
import type { SearchParams } from "#T/next.ts";
import { type MaterialObject } from "kodik-api-simplified/index";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";
import { cookies, headers } from "next/headers";
import { Welcome_for_home_page } from "#/components/info/welcome-text-for-home-page";
import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { PaginationWithLinks } from "#/components/anime_page/pagination/utility-pagination";
import { Logger } from "log-it-colored";
import { kodikApiSSR } from "#/providers/kodik-api-client";
export interface IFetchedKodikMainReduced extends Omit<MaterialObject, "translation"> {
    translation: {
        id: number;
        unique_link: string;
        title: string;
        type: string;
    }[];
}
export default async function __Home_RootPage({ searchParams }: { searchParams: SearchParams }) {
    const envA = await loadEnvFile();
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    const searchPms = await searchParams;

    const kodikResponse = await (
        await kodikApiSSR()
    ).list({
        with_material_data: true,
        limit: Number(searchPms.limit) || 100,
        has_field: "shikimori_id",
        order: "desc",
        next: "WzkuMCwic2VyaWFsLTQ2MjQwIl0=",
        sort: "shikimori_rating",
        types: ["anime", "anime-serial"],
    });
    const { results: data, prev_page, next_page, total } = kodikResponse;

    const reduced: IFetchedKodikMainReduced[] = data.reduce((accumulator, curr_item) => {
        const existing_index: number = accumulator.findIndex((one_item) => one_item.shikimori_id === curr_item.shikimori_id);
        const is_not_found = existing_index === -1;
        if (!is_not_found) {
            const one_new: IFetchedKodikMainReduced["translation"][number] = {
                ...curr_item.translation,
                unique_link: curr_item.link,
            };
            accumulator[existing_index].translation.push(one_new);
        }
        if (is_not_found) {
            const one_new: IFetchedKodikMainReduced = {
                ...curr_item,
                translation: [{ ...curr_item.translation, unique_link: curr_item.link }],
            };
            accumulator.push(one_new);
        }
        return accumulator;
    }, [] as IFetchedKodikMainReduced[]);
    return (
        <>
            <Welcome_for_home_page logged={!!auth} />
            <AnimeMainPageCarousel animes={await ResServiceApi.internals.top_chart_animes()} resServerUrl={envA.resource_service.url} />
            <Anime_List_Component kodiks={reduced} resUrl={envA.resource_service.url} />
            <PaginationWithLinks pageSearchParam={"page"} totalCount={total} page={1} pageSize={100} />
        </>
    );
}


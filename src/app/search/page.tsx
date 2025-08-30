import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";

export default async function Root_search_page({ searchParams }: { searchParams: SearchParams }) {
    const sp = await searchParams;
    const res = await null;
    const pageSize = sp["pageSize"];
    let noInput = false;
    const res_url = (await loadEnvFile()).resource_service.url;
    const search_query = sp.search_query as string | undefined;
    if (!search_query || !/\S/.test(search_query)) {
        noInput = true;
    }
    return (
        <div>
            <SearchAnimeAddressBarInHeader />
            {res ? (
                <>{/* <Anime_List_Component resUrl={res_url} kodiks={res.data.paginated} /> */}</>
            ) : noInput ? (
                <div className=" h-50"></div>
            ) : (
                <Found_no_animes />
            )}
        </div>
    );
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
    const sq = String((await searchParams).search_query);
    return {
        title: `Поиск по запросу \"${sq}\" | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}


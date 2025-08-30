import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams } from "#T/nextjs";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { getKodikApi } from "#/providers/kodik-api-client";
import { dedupeAnimes } from "#/libs/kodik-wrapper-utils/reducer-deduper";

export default async function Root_search_page({ searchParams }: { searchParams: SearchParams }) {
    const sp = await searchParams;
    let _inputted = true;
    const res_url = (await loadEnvFile()).resource_service.url;
    const search_query = sp.search_query as string | undefined;
    if (!search_query || !/\S/.test(search_query)) {
        _inputted = false;
    }
    const res = await (
        await getKodikApi()
    ).search({
        limit: 100,
        title: search_query,
        has_field: "shikimori_id",
        types: ["anime", "anime-serial"],
    });

    return (
        <div>
            <SearchAnimeAddressBarInHeader />
            {res ? (
                <Anime_List_Component resUrl={res_url} kodiks={dedupeAnimes(res.results)} />
            ) : _inputted ? (
                <Found_no_animes />
            ) : (
                <div className="h-50"></div>
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


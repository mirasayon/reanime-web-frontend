import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams } from "#T/nextjs";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { getKodikApi } from "#/providers/kodik-api-client";
import { dedupeAnimes } from "#/libs/kodik-wrapper-utils/reducer-deduper";

type Root_search_page = { searchParams: SearchParams };

export default async function Root_search_page({ searchParams }: Root_search_page) {
    const search_query = (await searchParams).search_query ? decodeURI(String((await searchParams).search_query)) : null;
    let _inputted = true;
    if (!search_query || !/\S/.test(search_query)) {
        _inputted = false;
    }
    const res_url = (await loadEnvFile()).resource_service.url;
    const res = search_query
        ? await (
              await getKodikApi()
          ).search({
              limit: 100,
              title: search_query,
              has_field: "shikimori_id",
              with_material_data: true,
              types: ["anime", "anime-serial"],
          })
        : null;

    return (
        <div>
            <SearchAnimeAddressBarInHeader query={search_query} />
            {res?.results?.length ? (
                <Anime_List_Component resUrl={res_url} kodiks={dedupeAnimes(res.results)} />
            ) : _inputted ? (
                <Found_no_animes />
            ) : (
                <div className="h-50"></div>
            )}
        </div>
    );
}

export async function generateMetadata({ searchParams }: Root_search_page): Promise<Metadata> {
    const search_query = (await searchParams).search_query ? decodeURI(String((await searchParams).search_query)) : null;
    if (!search_query) {
        return {
            title: `Поиск аниме | ${WebsiteConfigs.public_domain}`,
        };
    }
    return {
        title: `Поиск по запросу \"${search_query}\"`,
    } satisfies Metadata;
}


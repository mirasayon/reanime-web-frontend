import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams } from "#T/nextjs";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { getKodikApi } from "#/providers/kodik-api";
import { dedupeAnimes } from "#/utils/reducer-deduper";
import { redirect } from "next/navigation";
type SearchPageParams = { searchParams: SearchParams };
function getSearchQuery(searchParams: Awaited<SearchParams>): string | null {
    return searchParams.search_query ? decodeURI(String(searchParams.search_query)) : null;
}
export default async function Root_search_page({ searchParams }: SearchPageParams) {
    let search_query = null;
    try {
        search_query = getSearchQuery(await searchParams);
    } catch (error) {
        return redirect("/");
    }
    let _inputted = true;
    if (!search_query || !/\S/.test(search_query)) {
        _inputted = false;
    }
    const res_url = (await loadEnvFile()).resource_service_url;
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

export async function generateMetadata({ searchParams }: SearchPageParams): Promise<Metadata> {
    const search_query = getSearchQuery(await searchParams);
    if (!search_query) {
        return {
            title: `Поиск аниме | ${WebsiteConfigs.public_domain}`,
        };
    }
    return {
        title: `Поиск по запросу \"${search_query}\"`,
    } satisfies Metadata;
}


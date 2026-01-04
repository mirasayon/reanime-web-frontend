import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams, SearchPageParams } from "#T/nextjs";
import type { Metadata } from "next";
import { websiteConstants } from "#/configs/website-constants";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utility-components";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { kodikClient } from "#/providers/kodik-api";
import { dedupeAnimes } from "#/utils/reducer-deduper";
import { redirect } from "next/navigation";
function getSearchQuery(searchParams: Awaited<SearchParams>): string | null {
    return searchParams.search_query ? decodeURI(String(searchParams.search_query)) : null;
}
export default async function __SearchPage({ searchParams }: SearchPageParams) {
    let search_query = null;
    try {
        search_query = getSearchQuery(await searchParams);
    } catch {
        return redirect("/");
    }
    let _inputted = true;
    if (!search_query || !/\S/.test(search_query)) {
        _inputted = false;
    }
    const res = search_query
        ? await kodikClient.search({
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
                <Anime_List_Component data={dedupeAnimes(res.results)} />
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
            title: `Поиск аниме | ${websiteConstants.public_domain}`,
        };
    }
    return {
        title: `Поиск по запросу \"${search_query}\"`,
    } satisfies Metadata;
}

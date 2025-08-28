import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import type { SearchParams } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { LoadConfig } from "#/configs/environment-variables.main-config";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { PaginationWithLinks } from "#/components/anime_page/pagination/utility-pagination";

export default async function Root_search_page({ searchParams }: { searchParams: SearchParams }) {
    const sp = await searchParams;
    const res = await ResServiceApi.search(sp);
    const pageSize = sp["pageSize"];
    let noInput = false;
    const res_url = (await LoadConfig()).resource_service.url;
    const search_query = sp.search_query as string | undefined;
    if (!search_query || !/\S/.test(search_query)) {
        noInput = true;
    }
    return (
        <div>
            <SearchAnimeAddressBarInHeader />
            {res ? (
                <>
                    <Anime_List_Component resUrl={res_url} kodiks={res.data.paginated} />
                    <PaginationWithLinks
                        totalCount={res.data.total_length}
                        pageSearchParam={"page"}
                        pageSizeSelectOptions={{ pageSizeSearchParam: "pageSize", pageSizeOptions: [10, 20, 40, 50, 80, 100] }}
                        page={res.input.current_page}
                        pageSize={res.input.page_size}
                    />
                </>
            ) : noInput ? (
                <div className=" h-50"></div>
            ) : (
                <Found_no_animes />
            )}
        </div>
    );
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
    const sq = (await searchParams).search_query;
    return {
        title: `Поиск по запросу \"${sq}\" | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}


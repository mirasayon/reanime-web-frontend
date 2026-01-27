import { AnimeHomePageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { topChartAnimesStaticData } from "#/constants/anime-genres/top-chart-animes.static";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import type { Metadata } from "next/types";
import { websiteConstants } from "#/configs/website-constants";

export default function __HomePage() {
    return (
        <div className=" pb-30">
            <AnimeHomePageCarousel animes={topChartAnimesStaticData} />
            <SearchAnimeAddressBarInHeader redirect />
        </div>
    );
}
export const metadata: Metadata = {
    title: websiteConstants.public_domain,
    description: "Главная страница",
};

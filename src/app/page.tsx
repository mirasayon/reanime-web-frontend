import { AnimeMainPageCarousel } from "#/components/anime-carousel-main-page/anime-carousel-show";
import { topChartAnimesStaticData } from "#/constants/anime-genres/top-chart-animes.static";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";

export default function __HomePage() {
    return (
        <div className=" pb-30">
            <AnimeMainPageCarousel animes={topChartAnimesStaticData} />
            <SearchAnimeAddressBarInHeader redirect />
        </div>
    );
}

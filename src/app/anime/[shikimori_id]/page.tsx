"use server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimeDescription } from "#/components/anime_page/anime-description";
import { ShowAnimesScreenshotsComponent } from "#/components/animes/anime-screenshots";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { hasOnlyNumericString, getAnimePosterUrlByShikimoriId } from "#/utils";
import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import { AnimePlayer } from "#/components/animes/anime-player";
import { MainRelatedAnimesSection } from "#/components/animes/related_animes";
import { GetRelatedAnimes } from "#/libs/shikimoript/get-related-animes";
import { setMetadataForWatchAnimePage } from "#/meta/set-metadata-for-watch-page";
import { MainCommentsSection } from "#/integration/user-service/comments/main-comments-section";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { AnimeCollectionBtnsWrapper } from "#/components/anime-collections/anime-collection-btns-wrapper";
type __AnimeSeriesPageProps = {
    params: Promise<{ shikimori_id: string }>;
};
export default async function __AnimeSeriesPage({ params }: __AnimeSeriesPageProps): Promise<React.JSX.Element> {
    const shikimori_id_web = (await params).shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !hasOnlyNumericString(shikimori_id_web)) {
        return notFound();
    }

    const auth = await sessionAuthenticator_S_A();
    const animeId = Number(shikimori_id_web);
    const anime = await getAnyByShikimoriFromKodikApi(animeId);
    if (!anime) {
        return notFound();
    }

    return (
        <>
            <AnimeDescription cover_image_src={getAnimePosterUrlByShikimoriId(anime.shikimori_id)} anime={anime} />
            {/* <AnimeWatchPagePromoVideos trailer={anime.promo} /> */}
            <AnimeCollectionBtnsWrapper animeId={animeId} auth={auth} />
            <AnimePlayer vid_src={anime.link} nextEpisodeAt={nextEpisodeSimple(anime.material_data?.next_episode_at)} />
            <ShowAnimesScreenshotsComponent screenshots={anime.screenshots} title_of_anime={anime.title} />
            <MainRelatedAnimesSection related={await GetRelatedAnimes(animeId)} />
            <MainCommentsSection shikimori_id={animeId} current_user={auth} />
        </>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ shikimori_id: string }> }): Promise<Metadata> {
    return await setMetadataForWatchAnimePage((await params).shikimori_id);
}
function nextEpisodeSimple(_nextEpisodeAt?: string) {
    if (!_nextEpisodeAt) {
        return null;
    }
    const nextEpisodeAt = new Date(_nextEpisodeAt);
    if (nextEpisodeAt.getTime() <= Date.now()) {
        return "Серия уже вышла";
    }
    return formatDistanceToNow(nextEpisodeAt, { addSuffix: true, locale: ru });
}

"use server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimeDescription } from "#/components/anime_page/anime-description";
import { ShowAnimesScreenshotsComponent } from "#/components/animes/anime-screenshots";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { hasOnlyNumericString, getAnimePosterUrlByShikimoriId } from "#/utils";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import type { JSX } from "react";
import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import { AnimePlayer } from "#/components/animes/anime-player";
import { Related_animes } from "#/components/animes/related_animes";
import { GetRelatedAnimes } from "#/libs/shikimoript/get-related-animes";
import { setMetadataForWatchAnimePage } from "#/meta/set-metadata-for-watch-page";
import { Comments_section } from "#/integration/user-service/comments/сomments_section";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
type __AnimeSeriesPageProps = {
    params: Promise<{ shikimori_id: string }>;
};
export default async function __AnimeSeriesPage({ params }: __AnimeSeriesPageProps): Promise<JSX.Element> {
    const shikimori_id_web = (await params).shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !hasOnlyNumericString(shikimori_id_web)) {
        return notFound();
    }
    const auth = await sessionAuthenticator();
    const current_shikimori_id = Number(shikimori_id_web); //* * **

    const env = await loadEnvFile();
    const anime = await getAnyByShikimoriFromKodikApi(current_shikimori_id);

    if (!anime) {
        return notFound();
    }
    return (
        <>
            <AnimeDescription cover_image_src={getAnimePosterUrlByShikimoriId(anime.shikimori_id)} anime={anime} />
            {/* <AnimeWatchPagePromoVideos trailer={anime.promo} /> */}
            <AnimePlayer vid_src={anime.link} nextEpisodeAt={nextEpisodeSimple(anime.material_data?.next_episode_at)} />
            <ShowAnimesScreenshotsComponent screenshots={anime.screenshots} title_of_anime={anime.title} />
            <Related_animes related={await GetRelatedAnimes(current_shikimori_id)} />
            <Comments_section shikimori_id={anime.shikimori_id} current_user={auth} userServerBaseUrl={env.user_service.url} />
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

"use server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimeDescriptionModule } from "#/components/anime_page/anime-description-module";
import { ShowAnimesScreenshotsComponent } from "#/components/animes/frames_anime";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import type { IPageParams } from "#T/next";
import { setMetadataForWatchAnimePage } from "#/utils/anime-watch-pages/set-metadata-for-watch-page";
import { is_contains_only_numeric_string } from "#/utils/common";
import { getAnimePosterUrlByShikimoriId } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import type { JSX } from "react";
import { getAnyByShikimoriFromKodikApi } from "#/providers/kodik-api-utils/get-any-by-id";
import { AnimePlayer } from "#/components/animes/anime-player";
import { Related_animes } from "#/components/animes/related_animes";
import { GetRelatedAnimes } from "#/integrators/resource-service/get-related-animes";
type __AnimeSeriesPageProps = {
    params: IPageParams<{ shikimori_id: string }>;
};
export default async function __AnimeSeriesPage({ params }: __AnimeSeriesPageProps): Promise<JSX.Element> {
    const _params = await params;
    const shikimori_id_web = _params.shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !is_contains_only_numeric_string(shikimori_id_web)) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **

    const anime = await getAnyByShikimoriFromKodikApi(current_shikimori_id);

    if (!anime) {
        return notFound();
    }
    const res_url = (await loadEnvFile()).resource_service.url;

    function nextEpisodeSimple(nat?: string) {
        if (!nat) {
            return null;
        }
        const nextEpisodeAt = new Date(nat);
        if (nextEpisodeAt.getTime() <= Date.now()) {
            return "Серия уже вышла";
        }
        return formatDistanceToNow(nextEpisodeAt, { addSuffix: true, locale: ru });
    }

    return (
        <>
            <AnimeDescriptionModule cover_image_src={getAnimePosterUrlByShikimoriId(anime.shikimori_id, res_url)} anime={anime} />
            {/* <AnimeWatchPagePromoVideos trailer={anime.promo} /> */}
            <AnimePlayer vid_src={anime.link} nextEpisodeAt={nextEpisodeSimple(anime.material_data?.next_episode_at)} />
            <ShowAnimesScreenshotsComponent screenshots={anime.screenshots} title_of_anime={anime.title} />
            <Related_animes related={await GetRelatedAnimes(current_shikimori_id)} />
        </>
    );
}

export async function generateMetadata({ params }: { params: IPageParams<{ shikimori_id: string }> }): Promise<Metadata> {
    return await setMetadataForWatchAnimePage((await params).shikimori_id);
}


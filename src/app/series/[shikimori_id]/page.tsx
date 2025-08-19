"use server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Related_animes } from "#/components/animes/related_animes";
import { Anime_description } from "#/components/anime_page/anime_description";
import { ShowScreenshotsComponent } from "#/components/animes/frames_anime";
import { Serial_Player_Component } from "#/components/animes/series-episode-player";
import { AnimeWatchPagePromoVideos } from "#/components/animes/watch-anime-pages/promo_content";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import type { NextJS_Types } from "#T/next";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { setMetadataForWatchAnimePage } from "#/utils/anime-watch-pages/set-metadata-for-watch-page";
import { is_contains_only_numeric_string } from "#/utils/common";
import { get_poster_image_url_by_filename } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { LoadConfig } from "#/configs/environment-variables.main-config";
export default async function __Serial_shikimori_id_page({
    params,
    searchParams,
}: {
    params: NextJS_Types.Params<{ shikimori_id: string }>;
    searchParams: NextJS_Types.SearchParams;
}): Promise<React.JSX.Element> {
    const rp = await params;
    const sp = await searchParams;
    const shikimori_id_web = rp.shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !is_contains_only_numeric_string(shikimori_id_web)) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **

    const anime: IReady_Animes_DB | null = await ResServiceApi.byid.series_by_id({ shikimori_id: current_shikimori_id });

    if (!anime) {
        return notFound();
    }
    const _R = anime.w.at(-1)?.ser;
    const v2 = _R ? Object.entries(_R).at(-1)?.[0] : null;

    let current_studio_id: number = Number(sp.sid) || anime.w[0].sid; //** *

    const curSeason = anime.season || v2;
    if (!curSeason) {
        return notFound();
    }
    const current_season_kodik = anime.w.filter((__tr_item) => !!__tr_item.ser?.[String(curSeason)]);
    const is_in_translations: boolean = current_season_kodik.some((item) => item.sid === current_studio_id);
    if (!is_in_translations) {
        current_studio_id = current_season_kodik[0].sid;
    }

    const kodik_with_episodes = current_season_kodik.find((tsi) => tsi.sid === current_studio_id);
    type kodik_series = NonNullable<IReady_Animes_DB["w"][number]["ser"]>;
    if (!kodik_with_episodes) {
        return notFound();
    }

    const current_season_episode_list: kodik_series[string]["episodes"] = kodik_with_episodes.ser![curSeason].episodes;

    const array_of_episodes: { url: string; key: string }[] = [];

    for (const key in current_season_episode_list) {
        array_of_episodes[Number(key)] = {
            url: current_season_episode_list[key],
            key: key,
        };
    }

    const first_possible_ep: number = array_of_episodes.findIndex((item) => !!item?.key);

    const last_possible_ep: number = array_of_episodes.findLastIndex((item) => !!item?.key);

    let current_episode: number = Number(sp.episode) || first_possible_ep;
    const is_in_possible_eps: boolean = array_of_episodes.some((item) => Number(item.key) === current_episode);

    if (!is_in_possible_eps) {
        current_episode = first_possible_ep;
    }

    if (current_episode > last_possible_ep) {
        current_episode = last_possible_ep;
    }

    if (current_episode < first_possible_ep) {
        current_episode = first_possible_ep;
    }
    const is_now_first_episode: boolean = current_episode === first_possible_ep;
    const is_now_last_episode: boolean = current_episode === last_possible_ep;

    const res_url = (await LoadConfig()).partners.resource_service.url;
    const current_previous_episode: number = is_now_first_episode ? current_episode : current_episode - 1;
    const current_next_episode: number = is_now_last_episode ? current_episode : current_episode + 1;

    // const current_user: User | null = await get_user_from_cookies();

    return (
        <>
            <Anime_description
                cover_image_src={get_poster_image_url_by_filename(anime.poster_image_for_rea, res_url)}
                current_user={null}
                // current_user={current_user}
                anime={anime}
            />
            <AnimeWatchPagePromoVideos trailer={anime.promo} />
            <Serial_Player_Component
                current_studio_id={current_studio_id}
                firstPossibleEp={first_possible_ep}
                lastPossibleEp={last_possible_ep}
                iframeUrl={array_of_episodes[current_episode].url}
                prevEp={current_previous_episode}
                nextEp={current_next_episode}
                ds_arrays={current_season_kodik}
                array_of_episodes={array_of_episodes}
                current_episode={current_episode}
            />
            <ShowScreenshotsComponent res_url={res_url} screenshots={anime.screenshots_rea} title_of_anime={anime.names.kkru} shiki_id={anime.sid} />
            <Related_animes related={anime.rels} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ shikimori_id: string }> }): Promise<Metadata> {
    return await setMetadataForWatchAnimePage((await params).shikimori_id);
}

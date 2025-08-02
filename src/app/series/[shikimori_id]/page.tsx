import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Related_animes } from "#/components/animes/related_animes";
import { Anime_description } from "#/components/anime_page/anime_description";
import { FramesAnime } from "#/components/animes/frames_anime";
import { Serial_Player_Component } from "#/components/animes/serial_player";
import { Global_Utilities } from "#/utils/functions";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Trailer_Component } from "#/components/animes/promo_content";
import type { JsonDB } from "#T/shared/json_db";
import type { NextJS_Types } from "#T/next";
import { Anime_Series_Utils } from "#/utils/watch";
import { DMCA_Protected } from "#/components/animes/dmca_protected";
import { ResServiceApi } from "#/integrators/resource-service/index";
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
    if (Number.isNaN(shikimori_id_web) || !Global_Utilities.is_contains_only_numeric_string(shikimori_id_web)) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **

    const anime: JsonDB.ftype | null = await ResServiceApi.core.byid.series_by_id(current_shikimori_id);

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
    type kodik_series = NonNullable<JsonDB.ftype["w"][number]["ser"]>;
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

    const current_previous_episode: number = is_now_first_episode ? current_episode : current_episode - 1;
    const current_next_episode: number = is_now_last_episode ? current_episode : current_episode + 1;

    // const current_user: User | null = await get_user_from_cookies();

    return (
        <>
            <Anime_description
                cover_image_src={Global_Utilities.get_poster_image_url_by_filename(anime.img) || UtilityJSX.Default_poster()}
                current_user={null}
                // current_user={current_user}
                anime={anime}
            />
            <Trailer_Component trailer={anime.promo} />

            {anime.hdp ? (
                <DMCA_Protected />
            ) : (
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
            )}

            <FramesAnime screenshots={anime.frms} title_of_anime={anime.nms.kkru} shiki_id={anime.sid} />
            <Related_animes related={anime.rels} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ shikimori_id: string }> }): Promise<Metadata> {
    return await Anime_Series_Utils.setMetadata((await params).shikimori_id);
}

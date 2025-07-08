// import { ApplicationConfig } from "#/configs/application";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Related_animes } from "#/components/animes/related_animes";
import { Anime_description } from "#/components/components/anime_description";
// import { get_user_from_cookies } from "#server/auth/get_user_from_cookies";
import { FramesAnime } from "#/components/animes/frames_anime";
import { Serial_Player_Component } from "#/components/animes/serial_player";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { Global_Utilities } from "#/utils/functions";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Trailer_Component } from "#/components/animes/promo_content";
// import { Comments_section } from "#/components/components/сomments_section";
import { AdsRSYA } from "#/components/ads/yandex_ads";
import type { JsonDB } from "#T/shared/json_db";
import type { NextTN } from "#T/next";
import { UtilsWatch } from "#/utils/watch";
import { DMCA_Protected } from "#/components/animes/dmca_protected";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";
export default async function __Serial_shikimori_id_page({
    params,
    searchParams,
}: {
    params: NextTN.Params<{ shikimori_id: string }>;
    searchParams: NextTN.SearchParams;
}): Promise<React.JSX.Element> {
    const rp = await params;
    const sp = await searchParams;
    const shikimori_id_web = rp.shikimori_id;
    if (
        Number.isNaN(shikimori_id_web) ||
        !Global_Utilities.is_contains_only_numeric_string(shikimori_id_web)
    ) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **

    const anime: JsonDB.ftype | null =
        await Reanime_Resource_Service_Api_Integrator.core.byid.series_by_id(current_shikimori_id);

    if (!anime) {
        return notFound();
    }
    const _R = anime.w.at(-1)?.ser;
    const v2 = _R ? Object.entries(_R).at(-1)?.[0] : null;

    const { is_dark } = await ServerSideThemeCookie();

    let current_studio_id: number = Number(sp.sid) || anime.w[0].sid; //** *

    const curSeason = anime.season || v2;
    if (!curSeason) {
        return notFound();
    }
    const current_season_kodik = anime.w.filter(
        (__tr_item) => !!__tr_item.ser?.[String(curSeason)],
    );
    const is_in_translations: boolean = current_season_kodik.some(
        (item) => item.sid === current_studio_id,
    );
    if (!is_in_translations) {
        current_studio_id = current_season_kodik[0].sid;
    }

    const kodik_with_episodes = current_season_kodik.find((tsi) => tsi.sid === current_studio_id);
    type kodik_series = NonNullable<JsonDB.ftype["w"][number]["ser"]>;
    if (!kodik_with_episodes) {
        return notFound();
    }

    const current_season_episode_list: kodik_series[string]["episodes"] =
        kodik_with_episodes.ser![curSeason].episodes;

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
    const is_in_possible_eps: boolean = array_of_episodes.some(
        (item) => Number(item.key) === current_episode,
    );

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

    const current_previous_episode: number = is_now_first_episode
        ? current_episode
        : current_episode - 1;
    const current_next_episode: number = is_now_last_episode
        ? current_episode
        : current_episode + 1;

    // const current_user: User | null = await get_user_from_cookies();

    return (
        <>
            <Anime_description
                cover_image_src={
                    Global_Utilities.get_poster_image_url_by_filename(anime.img) ||
                    UtilityJSX.Default_poster(is_dark)
                }
                is_dark={is_dark}
                current_user={null}
                // current_user={current_user}
                anime={anime}
            />
            <Trailer_Component trailer={anime.promo} />

            {anime.hdp ? (
                <DMCA_Protected is_dark={is_dark} />
            ) : (
                <Serial_Player_Component
                    is_dark={is_dark}
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

            <FramesAnime
                screenshots={anime.frms}
                is_dark={is_dark}
                title_of_anime={anime.nms.kkru}
                shiki_id={anime.sid}
            />
            <Related_animes is_dark={is_dark} related={anime.rels} />
            {/* <Comments_section is_dark={is_dark} shikimori_id={current_shikimori_id} current_user={current_user} /> */}
            <AdsRSYA.UniversalBanner is_dark={is_dark} />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: NextTN.Params<{ shikimori_id: string }>;
}): Promise<Metadata> {
    return await UtilsWatch.setMetadata((await params).shikimori_id);
}

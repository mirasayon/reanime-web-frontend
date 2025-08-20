"use client";
import { Localization_Studios_List_Component } from "./translation_studios_list.anime-watch";
import type { IReady_Animes_DB } from "@reanime/resource-service/types/animes-db-types/ready-animes.types.js";
import { Episodes_List_Component } from "./episodes_list";
import { Ads_in_kodik_is_not_mine } from "#/components/info/show-ads-in-kodik-are-not-mine-text";
import { SelectEpFormForSeries } from "./player-for-series-element/select-ep-form.smart";
import type { JSX } from "react";
import { ITypeShikimoriNextEpisodesCalendar } from "@reanime/resource-service/types/animes-db-types/shikimori-next-episode-calendar.types.js";
type Serial_Player_ComponentProps = {
    array_of_episodes: { url: string; key: string }[];
    current_episode: number;
    current_studio_id: number;
    iframeUrl: string;
    firstPossibleEp: number;
    lastPossibleEp: number;
    nextEp: number;
    prevEp: number;
    shikimoriEpisodeCalendar: ITypeShikimoriNextEpisodesCalendar | undefined;
    ds_arrays: IReady_Animes_DB["w"];
};
export function Serial_Player_Component({
    current_episode,
    iframeUrl,
    current_studio_id,
    firstPossibleEp,
    lastPossibleEp,
    array_of_episodes,
    prevEp,
    shikimoriEpisodeCalendar,
    nextEp,
    ds_arrays,
}: Serial_Player_ComponentProps): JSX.Element {
    const nextEpisodeAtDate = shikimoriEpisodeCalendar ? new Date(shikimoriEpisodeCalendar.next_episode_at) : null;
    const current_video_url = `https:${iframeUrl}`;
    return (
        <div className={`flex flex-col`} id="play">
            <Localization_Studios_List_Component current_studio_id={current_studio_id} current_episode={current_episode} ds_arrays={ds_arrays} />
            <div className="flex flex-col justify-center items-center">
                <span className="text-lg font-bold">Эпизод {current_episode}</span>
                <Ads_in_kodik_is_not_mine />
                <iframe title="плеер" loading="lazy" className="min-w-full min-h-[500px]" src={current_video_url} allowFullScreen={true} />
            </div>{" "}
            <div className={` ${rea_wrapper_border} flex flex-row flex-wrap`}>
                <Episodes_List_Component
                    array_of_episodes={array_of_episodes}
                    current_studio_id={current_studio_id}
                    current_episode={current_episode}
                />{" "}
                <SelectEpFormForSeries
                    firstPossibleEp={firstPossibleEp}
                    lastPossibleEp={lastPossibleEp}
                    prevEp={prevEp}
                    nextEp={nextEp}
                    current_episode={current_episode}
                    current_studio_id={current_studio_id}
                />
            </div>{" "}
            {nextEpisodeAtDate && (
                <div className=" p-4">
                    <div className="">След. эпизод {nextEpisodeSimple(nextEpisodeAtDate)}</div>
                </div>
            )}
        </div>
    );
}
// const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });

// function diffToNearestUnit(future: Date) {
//     const sec = Math.round((future.getTime() - Date.now()) / 1000);
//     if (sec < 60) return rtf.format(sec, "second"); // "через 10 секунд"
//     const min = Math.round(sec / 60);
//     if (min < 60) return rtf.format(min, "minute"); // "через 5 минут"
//     const hours = Math.round(min / 60);
//     if (hours < 24) return rtf.format(hours, "hour"); // "через 3 часа"
//     const days = Math.round(hours / 24);
//     return rtf.format(days, "day"); // "через 2 дня"
// }
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { rea_wrapper_border } from "#/styles/provider";

function nextEpisodeSimple(nextEpisodeAt: Date) {
    if (nextEpisodeAt.getTime() <= Date.now()) {
        return "Серия уже вышла";
    }
    return formatDistanceToNow(nextEpisodeAt, { addSuffix: true, locale: ru }); // -> "через 2 дня", "через 5 минут"
}

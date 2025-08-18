"use client";
import { Localization_Studios_List_Component } from "./translation_studios_list.anime-watch";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { Episodes_List_Component } from "./episodes_list";
import { Ads_in_kodik_is_not_mine } from "#/components/info/show-ads-in-kodik-are-not-mine-text";
import { rea_wrapper_border } from "#/styles/provider";
import { SelectEpFormForSeries } from "./player-for-series-element/select-ep-form.smart";

export function Serial_Player_Component({
    current_episode,
    iframeUrl,
    current_studio_id,
    firstPossibleEp,
    lastPossibleEp,
    array_of_episodes,
    prevEp,
    nextEp,
    ds_arrays,
}: {
    array_of_episodes: { url: string; key: string }[];
    current_episode: number;
    current_studio_id: number;
    iframeUrl: string;
    firstPossibleEp: number;
    lastPossibleEp: number;
    nextEp: number;
    prevEp: number;
    ds_arrays: IReady_Animes_DB["w"];
}) {
    const current_video_url = `https:${iframeUrl}`;
    return (
        <section className={`flex flex-col p-2 ${rea_wrapper_border}`} id="play">
            <Localization_Studios_List_Component current_studio_id={current_studio_id} current_episode={current_episode} ds_arrays={ds_arrays} />
            <div className="flex flex-col justify-center items-center">
                <span className="text-lg font-bold">Эпизод {current_episode}</span>
                <Ads_in_kodik_is_not_mine />
                <iframe title="плеер" loading="lazy" className="min-w-full min-h-[500px]" src={current_video_url} allowFullScreen={true} />
            </div>{" "}
            <div className=" p-2 flex flex-row flex-wrap">
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
            </div>
        </section>
    );
}

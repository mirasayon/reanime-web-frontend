import { Localization_Studios_List_Component } from "./translation_studios_list.anime-watch";
import { Episodes_List_Component } from "./episodes_list";
import { Ads_in_kodik_is_not_mine } from "#/components/info/show-ads-in-kodik-are-not-mine-text";
import { SelectEpFormForSeries } from "./player-for-series-element/select-ep-form.smart";
import type { JSX } from "react";
import { rea_wrapper_border } from "#/styles/provider";
import type { IReady_Animes_DB } from "&rs/ready-animes.types";
type Serial_Player_ComponentProps = {
    array_of_episodes: { url: string; key: string }[];
    current_episode: number;
    current_studio_id: number;
    iframeUrl: string;
    firstPossibleEp: number;
    nextEpisodeAt: string | null;
    lastPossibleEp: number;
    nextEp: number;
    prevEp: number;
    watchEpisodeSeries: IReady_Animes_DB["w"];
};
export function AnimePlayerModuleForSeries({
    current_episode,
    iframeUrl,
    current_studio_id,
    firstPossibleEp,
    lastPossibleEp,
    nextEpisodeAt,
    array_of_episodes,
    prevEp,
    nextEp,
    watchEpisodeSeries,
}: Serial_Player_ComponentProps): JSX.Element {
    const current_video_url = `https:${iframeUrl}`;
    return (
        <div className={`flex flex-col`} id="play">
            <Localization_Studios_List_Component
                current_studio_id={current_studio_id}
                current_episode={current_episode}
                ds_arrays={watchEpisodeSeries}
            />
            <div className="flex flex-col justify-center items-center">
                <span className="text-lg font-bold">Эпизод {current_episode}</span>
                <Ads_in_kodik_is_not_mine />
                <iframe
                    // ` w-[${1600 * 1}px] h-[${900 * 1}px]
                    title="плеер"
                    loading="lazy"
                    className={` size-full p-2 h-96`}
                    src={current_video_url}
                    allowFullScreen={true}
                />
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
            {nextEpisodeAt && (
                <div className=" p-4">
                    <div className="">След. эпизод {nextEpisodeAt}</div>
                </div>
            )}
        </div>
    );
}


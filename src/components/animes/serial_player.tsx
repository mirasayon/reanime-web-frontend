"use client";
import { Localization_Studios_List_Component } from "./translation_studios_list";
import { useRouter } from "next/navigation";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import type { JsonDB } from "#T/shared/json_db";
import { Episodes_List_Component } from "./episodes_list";
import { Ads_in_kodik_is_not_mine } from "#/components/info/ads_in_kodik";
import { rea_wrapper_border } from "#/styles/provider";

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
    ds_arrays: JsonDB.ftype["w"];
}) {
    const router = useRouter();
    const is_only_one_episode: boolean = lastPossibleEp !== 1;
    const is_show_next_ep_button: boolean = lastPossibleEp !== current_episode;
    const is_show_prev_ep_button: boolean = firstPossibleEp !== current_episode;
    function submit_episode(event: FormData): void {
        const e_episode: FormDataEntryValue | null = event.get("episode");
        console.log(e_episode);
        if (!e_episode) {
            return;
        }
        const new_url = `?${new URLSearchParams({
            dsid: `${current_studio_id}`,
            episode: `${e_episode}`,
        })}#play`;
        return router.push(new_url);
    }
    const current_video_url = `https:${iframeUrl}`;
    return (
        <section className={`flex flex-col p-2 ${rea_wrapper_border}`} id="play">
            <Localization_Studios_List_Component
                current_studio_id={current_studio_id}
                current_episode={current_episode}
                ds_arrays={ds_arrays}
            />

            <div className="flex flex-col justify-center items-center">
                <span className="text-lg font-bold">Эпизод {current_episode}</span>
                <Ads_in_kodik_is_not_mine />
                <iframe
                    title="плеер"
                    loading="lazy"
                    className="min-w-full min-h-[500px]"
                    src={current_video_url}
                    allowFullScreen={true}
                />
                <div className="flex flex-wrap">
                    {is_only_one_episode && (
                        <form className="flex justify-center items-center" action={submit_episode}>
                            <label htmlFor="episode" className="m-2 text-sm">
                                Укажите нужную серию
                            </label>
                            <input
                                className="m-2 p-2 w-44 bg-transparent outline-hidden border-2 border-blue-400"
                                type="number"
                                id="episode"
                                name="episode"
                                min={firstPossibleEp}
                                max={lastPossibleEp}
                                placeholder={`${current_episode} (${firstPossibleEp}-${lastPossibleEp})`}
                                inputMode="numeric"
                            />
                            <button className="p-2 text-sm hover:bg-zinc-400" type="submit">
                                Перейти
                            </button>
                        </form>
                    )}
                    <div className="flex justify-center text-sm items-center">
                        {is_show_prev_ep_button && (
                            <a
                                href={`?${new URLSearchParams({
                                    sid: `${current_studio_id}`,
                                    episode: `${prevEp}`,
                                })}#play`}
                                className={
                                    "p-2 max-[700px]:text-[15px]  max-[500px]:text-[10px] hover:bg-blue-300 dark:hover:text-white hover:text-black"
                                }
                            >
                                <span className="flex flex-row flex-wrap">
                                    <span className="mt-1.5">
                                        <FaArrowLeftLong size={10} />
                                    </span>
                                    <span className="m-1">Предыдущий эпизод</span>
                                </span>
                            </a>
                        )}

                        {is_show_next_ep_button && (
                            <a
                                href={`?${new URLSearchParams({
                                    sid: `${current_studio_id}`,
                                    episode: `${nextEp}`,
                                })}#play`}
                                className="p-2  max-[700px]:text-[15px]  max-[500px]:text-[10px] hover:bg-blue-300 dark:hover:text-white hover:text-black"
                            >
                                <span className="flex flex-row flex-wrap">
                                    <span className="m-1">Следующий эпизод</span>
                                    <span className="mt-1.5">
                                        <FaArrowRightLong size={10} />
                                    </span>
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <Episodes_List_Component
                array_of_episodes={array_of_episodes}
                current_studio_id={current_studio_id}
                current_episode={current_episode}
            />
        </section>
    );
}

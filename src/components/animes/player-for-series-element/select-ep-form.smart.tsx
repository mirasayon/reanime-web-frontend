"use client";
import { useRouter } from "next/navigation";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import type { JSX } from "react";
type Props = {
    current_episode: number;
    lastPossibleEp: number;
    nextEp: number;
    prevEp: number;
    current_studio_id: number;
    firstPossibleEp: number;
};
type RT = JSX.Element;
export function SelectEpFormForSeries(props: Props): RT {
    const router = useRouter();
    const is_only_one_episode: boolean = props.lastPossibleEp !== 1;
    const is_show_next_ep_button: boolean = props.lastPossibleEp !== props.current_episode;
    const is_show_prev_ep_button: boolean = props.firstPossibleEp !== props.current_episode;
    function submit_episode(event: FormData): void {
        const e_episode: FormDataEntryValue | null = event.get("episode");
        if (!e_episode) {
            return;
        }
        const new_url = `?${new URLSearchParams({
            sid: `${props.current_studio_id}`,
            episode: `${e_episode}`,
        })}#play`;
        return router.push(new_url);
    }
    return (
        <>
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
                            min={props.firstPossibleEp}
                            max={props.lastPossibleEp}
                            placeholder={`${props.current_episode} (${props.firstPossibleEp}-${props.lastPossibleEp})`}
                            inputMode="numeric"
                        />
                        <button className="p-2 text-sm hover:bg-zinc-400 cursor-pointer" type="submit">
                            Перейти
                        </button>
                    </form>
                )}
                <div className="flex justify-center text-sm items-center">
                    {is_show_prev_ep_button && (
                        <Link
                            href={`?${new URLSearchParams({
                                sid: `${props.current_studio_id}`,
                                episode: `${props.prevEp}`,
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
                        </Link>
                    )}

                    {is_show_next_ep_button && (
                        <Link
                            href={`?${new URLSearchParams({
                                sid: `${props.current_studio_id}`,
                                episode: `${props.nextEp}`,
                            })}#play`}
                            className="p-2  max-[700px]:text-[15px]  max-[500px]:text-[10px] hover:bg-blue-300 dark:hover:text-white hover:text-black"
                        >
                            <span className="flex flex-row flex-wrap">
                                <span className="m-1">Следующий эпизод</span>
                                <span className="mt-1.5">
                                    <FaArrowRightLong size={10} />
                                </span>
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

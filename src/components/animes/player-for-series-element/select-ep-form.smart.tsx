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
            <div className={"flex flex-wrap"}>
                {is_only_one_episode && (
                    <form className="flex justify-center items-center" action={submit_episode}>
                        <input
                            className="m- p-2 min-w-44 bg-transparent outline-hidden border-4 rounded border-blue-500/40"
                            type="number"
                            id="episode"
                            name="episode"
                            min={props.firstPossibleEp}
                            max={props.lastPossibleEp}
                            placeholder={`${props.current_episode} (${props.firstPossibleEp}-${props.lastPossibleEp})`}
                            inputMode="numeric"
                        />
                        <button className="p-2 mr-1 text-sm hover:bg-zinc-400 dark:hover:bg-blue-800/50 cursor-pointer" type="submit">
                            Перейти
                        </button>
                    </form>
                )}
                <div className="flex justify-center text-sm items-center">
                    <Link
                        href={`?${new URLSearchParams({
                            sid: `${props.current_studio_id}`,
                            episode: `${props.prevEp}`,
                        })}#play`}
                        hidden={!is_show_prev_ep_button}
                        className={`${!is_show_prev_ep_button && " cursor-not-allowed "} p-2 hover:bg-blue-800/30`}
                    >
                        <div className="flex flex-wrap">
                            <FaArrowLeftLong className="mt-1.5" size={15} />
                            <div className="m-1">Пред. эпизод</div>
                        </div>
                    </Link>

                    <Link
                        href={`?${new URLSearchParams({
                            sid: `${props.current_studio_id}`,
                            episode: `${props.nextEp}`,
                        })}#play`}
                        hidden={!is_show_next_ep_button}
                        className={`${!is_show_next_ep_button && " cursor-not-allowed "} p-2 hover:bg-blue-800/30`}
                    >
                        <div className="flex flex-wrap">
                            <span className="m-1">След. эпизод</span>
                            <FaArrowRightLong size={15} className="mt-1.5" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

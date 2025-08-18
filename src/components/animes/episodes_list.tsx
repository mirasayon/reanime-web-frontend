import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";

export function Episodes_List_Component({
    array_of_episodes,
    current_studio_id,
    current_episode,
}: {
    array_of_episodes: { url: string; key: string }[];
    current_studio_id: number;
    current_episode: number;
}) {
    return (
        <div className="flex flex-wrap  ">
            <div className={`${rea_wrapper_border} mt-0 max-h-[200px] overflow-y-scroll scrollbar p-1 flex flex-wrap`}>
                <span className={"p-2 rounded font-medium text-sm dark:bg-slate-800 dark:text-white bg-blue-200 text-black "}>Серии:</span>

                {array_of_episodes.map(({ key }) => {
                    const key_episode = Number(key);
                    const link_url = new URLSearchParams({
                        sid: `${current_studio_id}`,
                        episode: `${key_episode}`,
                    });

                    const is_current = key_episode === current_episode;

                    return (
                        <Link
                            key={key}
                            href={`?${link_url}#play`}
                            className={`px-5 py-1 m-1 rounded font-bold transition-colors duration-200 ${
                                is_current
                                    ? "bg-purple-900 text-white"
                                    : "dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600  bg-slate-200 text-black hover:bg-slate-300"
                            }`}
                        >
                            {key}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

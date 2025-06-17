import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";

export function Episodes_List_Component({
    array_of_episodes,
    current_studio_id,
    current_episode,
    is_dark,
}: {
    is_dark: boolean;
    array_of_episodes: { url: string; key: string }[];
    current_studio_id: number;
    current_episode: number;
}) {
    return (
        <section className="flex flex-col flex-wrap">
            <div
                className={`p-1 mt-0 overflow-scroll flex flex-wrap max-h-[200px] ${rea_wrapper_border}`}
            >
                <span className={`p-1 ${is_dark ? "bg-slate-800" : "bg-blue-200"}`}>Серии:</span>
                {array_of_episodes.map((item) => {
                    const seria = Number(item.key);
                    const link_url = new URLSearchParams({
                        sid: `${current_studio_id}`,
                        episode: `${seria}`,
                    });
                    return (
                        <Link
                            href={`?${link_url}#play`}
                            className={`${
                                seria === current_episode
                                    ? "bg-purple-900"
                                    : `${is_dark ? "bg-slate-700" : "bg-slate-200"} `
                            } hover:bg-slate-500 p-1 px-5 font-bold`}
                            key={item.key}
                        >
                            {item.key}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

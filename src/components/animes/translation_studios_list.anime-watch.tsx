import { rea_wrapper_border } from "#/styles/provider";
import type { IReady_Animes_DB } from "&rs/ready-animes.types";
import Link from "next/link";

export function Localization_Studios_List_Component({
    ds_arrays,
    current_episode,
    current_studio_id,
}: {
    ds_arrays: IReady_Animes_DB["w"];
    current_episode?: number | undefined;
    current_studio_id: number;
}) {
    return (
        <div className={` flex flex-wrap ${rea_wrapper_border} py-2`}>
            <span className={`text-lg p-2 dark:bg-slate-800 bg-blue-200 `}>Студии перевода:</span>
            {ds_arrays.map((item) => {
                const search_params: query_param_type = current_episode
                    ? {
                          sid: `${item.sid}`,
                          episode: `${current_episode}`,
                      }
                    : { sid: `${item.sid}` };
                const link_url = new URLSearchParams(search_params);
                const is_current = current_studio_id === item.sid;
                return (
                    <Link
                        key={item.sid}
                        className={`px-5 py-1 m-1 rounded font-bold transition-colors duration-200 ${
                            is_current
                                ? "bg-purple-900 text-white"
                                : "dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600  bg-slate-200 text-black hover:bg-slate-300"
                        }`}
                        href={`?${link_url}#play`}
                    >
                        {item.std}
                    </Link>
                );
            })}
        </div>
    );
}
type query_param_type = {
    sid: string;
    episode?: string | undefined;
};


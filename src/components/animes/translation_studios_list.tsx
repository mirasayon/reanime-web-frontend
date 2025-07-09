import type { JsonDB } from "#T/shared/json_db";

export function Localization_Studios_List_Component({
    ds_arrays,
    current_episode,
    current_studio_id,
}: {
    ds_arrays: JsonDB.ftype["w"];
    current_episode?: number | undefined;
    current_studio_id: number;
}) {
    return (
        <div className={`dark:bg-slate-900 bg-slate-200 flex flex-wrap`}>
            <span className={`text-lg p-2 dark:bg-slate-800 bg-blue-200 `}>Студии перевода:</span>
            {ds_arrays.map((item) => {
                const search_params: type_ = current_episode
                    ? {
                          sid: `${item.sid}`,
                          episode: `${current_episode}`,
                      }
                    : { sid: `${item.sid}` };
                const link_url = new URLSearchParams(search_params);
                return (
                    <a
                        key={item.sid}
                        className={`hover:bg-slate-500 hover:text-white p-2 ${
                            current_studio_id === item.sid ? "bg-violet-400 text-white" : ""
                        }`}
                        href={`?${link_url}#play`}
                    >
                        {item.std}
                    </a>
                );
            })}
        </div>
    );
}
type type_ = {
    sid: string;
    episode?: string | undefined;
};

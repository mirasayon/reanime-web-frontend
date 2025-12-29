import type { finals } from "#T/shared/json_db";
import Link from "next/link";
import { rea_wrapper_border } from "#/styles/provider";
import { Anime_card_for_profile_page } from "#/components/me/anime_card_for_profile_page";

export function Switch_tab_component({
    tab_value,
    is_dark,
    liked_animes_kodiks,
    inplan_animes_kodiks,
    watching_animes_kodiks,
    viewed_animes_kodiks,
}: {
    is_dark: boolean;
    tab_value: "watching" | "liked" | "inplan" | "dumped" | "viewed";
    liked_animes_kodiks: (finals.ftype | null)[];
    watching_animes_kodiks: (finals.ftype | null)[];
    inplan_animes_kodiks: (finals.ftype | null)[];
    viewed_animes_kodiks: (finals.ftype | null)[];
}): React.JSX.Element {
    const style = `border-b-4 ${"bg-slate-100"} border-blue-600 border-spacing-14`;
    return (
        <div className={`p-2 ${rea_wrapper_border} min-h-[30vh]`}>
            <div className="flex gap-2" id="list">
                <Link
                    href="?tab=liked"
                    className={`${tab_value === "liked" ? style : "bg-slate-100"} ${
                        is_dark ? "bg-slate-700" : ""
                    } p-2  hover:bg-blue-400`}
                >
                    Понравившиеся
                </Link>
                <Link
                    href="?tab=watching"
                    className={`${tab_value === "watching" ? style : "bg-slate-100"} ${
                        is_dark ? "bg-slate-700" : ""
                    } p-2 hover:bg-blue-400`}
                >
                    Сейчас смотрю
                </Link>
                <Link
                    href="?tab=inplan"
                    className={`${tab_value === "inplan" ? style : "bg-slate-100"}  ${
                        is_dark ? "bg-slate-700" : ""
                    } p-2 hover:bg-blue-400`}
                >
                    В планах
                </Link>{" "}
                <Link
                    href="?tab=viewed"
                    className={`${tab_value === "viewed" ? style : "bg-slate-100"}  ${
                        is_dark ? "bg-slate-700" : ""
                    } p-2 hover:bg-blue-400`}
                >
                    Просмотрено
                </Link>
            </div>

            <div className="flex flex-wrap">
                {tab_value === "liked" &&
                    liked_animes_kodiks.map(
                        (item) => item && <Anime_card_for_profile_page key={item.sid} data={item} />,
                    )}
                {tab_value === "watching" &&
                    watching_animes_kodiks.map(
                        (item) => item && <Anime_card_for_profile_page key={item.sid} data={item} />,
                    )}
                {tab_value === "inplan" &&
                    inplan_animes_kodiks.map(
                        (item) => item && <Anime_card_for_profile_page key={item.sid} data={item} />,
                    )}
                {tab_value === "viewed" &&
                    viewed_animes_kodiks.map(
                        (item) => item && <Anime_card_for_profile_page key={item.sid} data={item} />,
                    )}
            </div>
        </div>
    );
}

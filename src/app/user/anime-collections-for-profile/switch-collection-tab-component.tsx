import Link from "next/link";
import { BORDER } from "#/styles/style-constants";
import { AnimeCardMainComponent } from "#/components/anime_page/main-anime-card-shower";
import type { EntityDataObject } from "kodik/types";

const style = `border-b-4 ${"bg-slate-100"} border-blue-600 border-spacing-14`;
export function AnimeBookmarkCollectionSwitchTabComponent({
    tab_value,
    abandonedList,
    plannedList,
    watchingList,
    completedList,
}: {
    tab_value: "watching" | "planned" | "abandoned" | "completed";
    abandonedList: EntityDataObject[];
    watchingList: EntityDataObject[];
    plannedList: EntityDataObject[];
    completedList: EntityDataObject[];
}): React.JSX.Element {
    return (
        <div className={`p-2 ${BORDER} min-h-[30vh]`}>
            <div className="flex gap-2" id="list">
                <Link
                    href="?animeStatusTab=abandoned"
                    className={`${
                        tab_value === "abandoned" ? style : "bg-slate-100"
                    } dark:bg-slate-700 p-2  hover:bg-blue-400`}
                >
                    Брошенные
                </Link>
                <Link
                    href="?animeStatusTab=watching"
                    className={`${
                        tab_value === "watching" ? style : "bg-slate-100"
                    } dark:bg-slate-700 p-2 hover:bg-blue-400`}
                >
                    Сейчас смотрю
                </Link>
                <Link
                    href="?animeStatusTab=planned"
                    className={`${
                        tab_value === "planned" ? style : "bg-slate-100"
                    } dark:bg-slate-700 p-2 hover:bg-blue-400`}
                >
                    В планах
                </Link>{" "}
                <Link
                    href="?animeStatusTab=completed"
                    className={`${
                        tab_value === "completed" ? style : "bg-slate-100"
                    } dark:bg-slate-700 p-2 hover:bg-blue-400`}
                >
                    Просмотрено
                </Link>
            </div>

            <div className="flex flex-wrap">
                {tab_value === "abandoned" &&
                    abandonedList.map((item) => item && <AnimeCardMainComponent key={item.shikimori_id} data={item} />)}
                {tab_value === "watching" &&
                    watchingList.map((item) => item && <AnimeCardMainComponent key={item.shikimori_id} data={item} />)}
                {tab_value === "planned" &&
                    plannedList.map((item) => item && <AnimeCardMainComponent key={item.shikimori_id} data={item} />)}
                {tab_value === "completed" &&
                    completedList.map((item) => item && <AnimeCardMainComponent key={item.shikimori_id} data={item} />)}
            </div>
        </div>
    );
}

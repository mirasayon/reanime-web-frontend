import Link from "next/link";
import { getTypeOfAnime, getAnimePosterUrlByShikimoriId } from "#/utils";
import { ShowRatingShikimoriDataSmartX } from "./show-release-data.smart-components";
import type { EntityDataObject } from "kodik/types";
import { AnimePosterImageForMainCard } from "./anime-cover-for-main-card";
type Props = { data: EntityDataObject };
export function UIAnimeCardMain({ data }: Props) {
    const imgUrl = getAnimePosterUrlByShikimoriId(data.shikimori_id);
    return (
        <Link
            href={`/anime/${data.shikimori_id}`}
            className={
                "flex text-wrap m-3 flex-row w-70 h-60  bg-blue-100 dark:bg-slate-800 hover:bg-blue-200/80 hover:dark:bg-slate-700/80 rounded"
            }
        >
            <AnimePosterImageForMainCard anime_title={`Обложка от аниме ${data.title}`} imgSrc={imgUrl} />
            <div className={"w-40 flex-col flex m-1 p-1 text-sm"}>
                <div className="p-1 font-bold ">{data.title}</div>
                <div className="p-1  font-bold  ">{getTypeOfAnime(data.type)}</div>

                <ShowRatingShikimoriDataSmartX rating={data.material_data?.shikimori_rating || null} />
                {data.material_data?.released_at && (
                    <div className={`  p-1 font-bold`}>{data.material_data?.released_at}</div>
                )}
                <div className="     p-1 font-bold">
                    {data.material_data?.anime_status === "released" ? "Завершён" : "Онгоинг"}
                </div>
            </div>
        </Link>
    );
}

import Link from "next/link";
import { getTypeOfAnime, getAnimePosterUrlByShikimoriId } from "#/utils";
import { ShowRatingShikimoriDataSmartX } from "./show-release-data.smartx";
import type { EntityDataObject } from "kodik/types";
import { AnimePosterImageForMainCard } from "./anime-cover-for-main-card";
type Props = { data: EntityDataObject; resUrl: string };
export function Anime_card_main({ data, resUrl }: Props) {
    const imgUrl = getAnimePosterUrlByShikimoriId(String(data.shikimori_id), resUrl);
    return (
        <div className={"p-1 max-[600px]:w-[150px] max-[600px]:h-[230px] h-[280px] relative  w-[200px] bg-violet-500/50 mx-[0.2px] m-2"}>
            <Link href={`/anime/${data.shikimori_id}`}>
                <AnimePosterImageForMainCard anime_title={`Обложка от аниме ${data.title}`} image_src={imgUrl} />

                <div className=" flex flex-col gap-2 absolute top-0 pt-1">
                    <div className="p-1 font-bold dark:bg-blue-900 bg-blue-200 shadow-sm shadow-violet-400">{data.title}</div>
                    <div className="p-1 w-max font-bold  dark:bg-blue-900 bg-blue-200 shadow-sm shadow-violet-400">{getTypeOfAnime(data.type)}</div>
                </div>

                <div className=" flex flex-col gap-1 absolute bottom-0 pb-2 dark:bg-zinc-900/20 ">
                    <ShowRatingShikimoriDataSmartX rating={data.material_data?.shikimori_rating || null} />
                    {data.material_data?.released_at && (
                        <div className={`dark:bg-blue-950  bg-blue-200    p-1 bottom-8 left-0 font-bold`}>{data.material_data?.released_at}</div>
                    )}
                    <div className="  bottom-1 dark:bg-blue-900 bg-blue-200  p-1 left-0 font-bold">
                        {data.material_data?.anime_status === "released" ? "Завершён" : "Онгоинг"}
                    </div>
                </div>
            </Link>
        </div>
    );
}


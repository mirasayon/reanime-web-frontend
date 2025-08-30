import Link from "next/link";
import { get_type_of_anime } from "#/utils/common";
import { getAnimePosterUrlByShikimoriId } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { ShowRatingShikimoriDataSmartX } from "./show-release-data.smartx";
import type { MaterialObject } from "kodik-api-simplified/resources";
type Props = { data: MaterialObject; resUrl: string };
export function Anime_card_main({ data, resUrl }: Props) {
    const ruStatus = {
        released: "Выпушен",
        ongoing: "Онгоинг",
    };
    return (
        <div className={"p-1 max-[600px]:w-[150px] max-[600px]:h-[230px] h-[280px] relative  w-[200px] bg-violet-500/50 mx-[0.2px] my-2   mt-0 "}>
            <Link href={`/anime/${data.shikimori_id}`}>
                <img
                    width={200}
                    height={270}
                    loading="lazy"
                    src={getAnimePosterUrlByShikimoriId(String(data.shikimori_id), resUrl)}
                    alt={`Обложка от аниме ${data.title}`}
                    className="object-cover h-[270px] w-[200px] max-[600px]:w-[150px] max-[600px]:h-[220px]"
                />

                <ShowRatingShikimoriDataSmartX rating={data.material_data?.shikimori_rating || null} />
                <div className={`dark:bg-blue-950  bg-blue-500 text-white  absolute  p-1 bottom-8 left-0 font-bold`}>
                    {data.material_data?.released_at ?? ""}
                </div>

                <div className="flex flex-col absolute top-0 left-0 gap-1">
                    <span className="p-1 text-white font-bold bg-blue-900 shadow-sm shadow-violet-400">{data.title}</span>
                    <span className="p-1 w-max text-white font-bold  bg-blue-900 shadow-sm shadow-violet-400">{get_type_of_anime(data.type)}</span>
                </div>

                <div className=" absolute bottom-1 bg-blue-900 p-1 left-0 font-bold">
                    {ruStatus[data.material_data?.anime_status as keyof typeof ruStatus] || ""}
                </div>
            </Link>
        </div>
    );
}


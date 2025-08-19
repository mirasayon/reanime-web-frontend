import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import Link from "next/link";
import { parseTitleNameForAnime } from "./get-parses-title-name-of-anime.util";
import { Normalize_anime_status } from "../utilities/common/assembler-of-utilities.utilx";
import { get_anime_url_by_id_and_type, get_type_of_anime } from "#/utils/common";
import { get_poster_image_url_by_filename } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { ShowReleaseDataSmartX } from "./show-release-data.smartx";
type Props = { render_images: boolean; data: IReady_Animes_DB; index: number; resUrl: string };
export function Anime_card_main({ data, index, render_images, resUrl }: Props) {
    return (
        <div
            className={`p-1 max-[600px]:w-[150px] max-[600px]:h-[230px] h-[280px] relative  w-[200px] border-2 border-blue-300 mx-[0.2px] my-2   mt-0 `}
        >
            <Link href={get_anime_url_by_id_and_type(data)} id={index === 0 ? "a_list" : "randomx_list"}>
                {render_images ? (
                    <img
                        width={200}
                        height={270}
                        loading="lazy"
                        src={get_poster_image_url_by_filename(data.poster_image_for_rea ?? null, resUrl)}
                        alt={`Обложка от аниме ${data.names.ru}`}
                        className="object-cover h-[270px] w-[200px] max-[600px]:w-[150px] max-[600px]:h-[220px]"
                    />
                ) : (
                    <div className="w-[200px] h-[270px] ">
                        <span className="flex m-10 font-mono p-5 text-5xl text-teal-500">{index}</span>
                    </div>
                )}
                <ShowReleaseDataSmartX rating={data.rating ?? null} />
                <div className={`dark:bg-blue-950  bg-blue-500 text-white  absolute  p-1 bottom-8 left-0 font-bold`}>{data.rel_date}</div>

                <div className="flex flex-col absolute top-0 left-0 gap-1">
                    <span className="p-1 text-white font-bold bg-blue-900 shadow-sm shadow-violet-400">{parseTitleNameForAnime(data)}</span>
                    <span className="p-1 w-max text-white font-bold  bg-blue-900 shadow-sm shadow-violet-400">{get_type_of_anime(data)}</span>
                </div>

                <div className=" absolute  text-black bottom-1 left-0 font-bold">
                    <Normalize_anime_status str={data.status} />
                </div>
            </Link>
        </div>
    );
}

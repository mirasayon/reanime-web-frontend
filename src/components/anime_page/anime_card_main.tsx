import { UtilityJSX } from "#/components/utilities/x_components";
import Link from "next/link";
import type { JsonDB } from "#T/shared/json_db";
import { JSX } from "react";
import { Global_Utilities } from "#/utils/functions";

const max = 40;
export function Anime_card_main({
    data,
    index,
    render_images,
}: {
    render_images: boolean;
    data: JsonDB.ftype;
    index: number;
}): JSX.Element {
    let any_title = data.nms.all.find((t) => !!t) || "";
    if (any_title.length > max) {
        any_title = `${any_title.slice(0, max)}...`;
    }

    return (
        <div
            className={` p-1 max-[600px]:w-[150px] max-[600px]:h-[230px] h-[280px] relative  w-[200px] border-2 border-blue-300 mx-[0.2px] my-2   mt-0 `}
        >
            <Link
                href={Global_Utilities.get_anime_url_by_id_and_type(data)}
                id={index === 0 ? "a_list" : "randomx_list"}
            >
                {render_images ? (
                    <img
                        width={200}
                        height={270}
                        loading="lazy"
                        src={Global_Utilities.get_rea_poster(data.img)}
                        alt={`Обложка от аниме ${data.nms.ru}`}
                        className="object-cover h-[270px] w-[200px] max-[600px]:w-[150px] max-[600px]:h-[220px]"
                    />
                ) : (
                    <div className="w-[200px] h-[270px] ">
                        <span className="flex m-10 font-mono p-5 text-5xl text-teal-500">
                            {index}
                        </span>
                    </div>
                )}

                {data.rating && (
                    <span className=" absolute left-0 p-1 bg-blue-950 text-gray-100 bottom-[62px] font-bold">
                        {data.rating}/10
                    </span>
                )}

                <div
                    className={`dark:bg-blue-950  bg-blue-500 text-white  absolute  p-1 bottom-8 left-0 font-bold`}
                >
                    {data.rel_date}
                </div>

                <div className="flex flex-col absolute top-0 left-0 gap-1">
                    <span className="p-1 text-white font-bold bg-blue-900 shadow-sm shadow-violet-400">
                        {any_title}
                    </span>
                    <span className="p-1 w-max text-white font-bold  bg-blue-900 shadow-sm shadow-violet-400">
                        {Global_Utilities.get_type_of_anime(data)}
                    </span>
                </div>

                <div className=" absolute  text-black bottom-1 left-0 font-bold">
                    <UtilityJSX.Normalize_anime_status str={data.status} />
                </div>
            </Link>
        </div>
    );
}

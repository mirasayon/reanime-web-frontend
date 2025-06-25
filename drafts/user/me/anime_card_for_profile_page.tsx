import type { finals } from "#T/shared/json_db";
import { Utils } from "#/utils/functions";
import { UtilityJSX } from "#/components/utilities/x_components";
import Link from "next/link";
import React from "react";

export function Anime_card_for_profile_page({
    data,
    is_dark,
}: {
    data: finals.ftype;
    is_dark: boolean;
}) {
    const poster = Utils.SetREAPIUrl(data.img) ?? UtilityJSX.Default_poster(is_dark);
    return (
        <Link href={data.rea_link} className="w-[20rem] border-4 border-blue-300 p-1 m-2">
            <img
                width={225 / 2}
                height={318 / 2}
                src={poster}
                alt={`Обложка от аниме ${data.titles.ru}`}
                className="rounded float-left m-2"
            />
            <div className={"m-2  hover:underline"}>
                <span className="font-semibold">{data.titles.ru}</span>
                <br />
                {`Год: ${data.release_year}`}
                <br />
                <span>Тип: {data.t === "movie" ? "Фильм" : "ТВ Сериал"}</span>
            </div>
        </Link>
    );
}

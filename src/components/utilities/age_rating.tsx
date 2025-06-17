"use client";
import type { JsonDB } from "#T/shared/json_db";
import { useState } from "react";

export function Normalize_age_rating({
    is_dark,
    rating,
    minimal_age,
}: {
    is_dark: boolean;
    rating: JsonDB.ftype["rating_mpaa"];
    minimal_age: number | null;
}) {
    const [is_hover, set_hover] = useState(false);
    let age_rating_number: string | number | "_" | undefined = minimal_age || rating;
    let normal_age_rating: string | undefined = rating;
    let rating_description = "";
    switch (rating) {
        case "PG-13":
        case "pg":
        case "PG":
            age_rating_number = "13+";
            rating_description = "Просмотр не желателен детям до 13 лет.";
            normal_age_rating = "PG 13";
            break;
        case "r":
        case "R":
            age_rating_number = "16+";
            rating_description =
                "Подростки, не достигшие 17-летнего возраста, допускаются на фильм только в сопровождении взрослых.";
            normal_age_rating = "R";
            break;
        case "R+":
        case "Rx":
            age_rating_number = "17+";
            rating_description = "Дети 17 лет возраста и младше на фильм не допускаются.";
            normal_age_rating = "R Plus (NC-17)";
            break;
        case null:
            age_rating_number = "Неизвестно";
            rating_description = "Скоро будет известно";
            normal_age_rating = "_";
            break;
        default:
            break;
    }

    return (
        <span
            className="relative"
            onMouseEnter={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                event.preventDefault();
                return set_hover(true);
            }}
            onMouseLeave={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                event.preventDefault();
                return set_hover(false);
            }}
        >
            {age_rating_number} <span className="text-slate-500">{normal_age_rating}</span>
            {is_hover && (
                <span
                    className={`delay-150 ease-in-out absolute right-[-40px]  w-max font-bold bottom-[20px] p-2 transition-all ${is_dark ? " bg-slate-950" : "bg-violet-200  "}`}
                >
                    {rating_description}
                </span>
            )}
        </span>
    );
}

import { type JSX } from "react";

export function Normalize_age_rating({
    rating,
    minimal_age,
}: {
    rating?: string & {};
    minimal_age: number | null;
}): React.JSX.Element {
    let age_rating_number = minimal_age || rating || undefined;
    let normal_age_rating = rating || undefined;
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
        default:
            age_rating_number = "Неизвестно";
            rating_description = "";
            normal_age_rating = "_";
            break;
    }

    return (
        <div className="flex gap-2">
            {age_rating_number} <div className="text-slate-500">({normal_age_rating})</div>
            <div className={` `}>{rating_description}</div>
        </div>
    );
}

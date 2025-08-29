import type { JSX } from "react";

type ShowRatingShikimoriDataSmartXProps = {
    rating: number | null;
};
export function ShowRatingShikimoriDataSmartX(props: ShowRatingShikimoriDataSmartXProps): JSX.Element | null {
    if (props.rating === null) {
        return null;
    }
    if (props.rating === 0) {
        return null;
    }
    const rating = props.rating;
    return <div className=" absolute left-0 p-1 bg-blue-950 text-gray-100 bottom-[62px] font-bold">{`${rating}/10`}</div>;
}


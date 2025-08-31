import type { JSX } from "react";

type ShowRatingShikimoriDataSmartXProps = {
    rating: number | null;
};
export function ShowRatingShikimoriDataSmartX({ rating }: ShowRatingShikimoriDataSmartXProps): JSX.Element | null {
    if (rating === null) {
        return null;
    }
    if (rating === 0) {
        return null;
    }
    return <div className=" absolute left-0 p-1 bg-blue-950 text-gray-100 bottom-[62px] font-bold">{`${rating}/10`}</div>;
}


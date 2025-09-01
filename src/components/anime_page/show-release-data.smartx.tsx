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
    return <div className="   left-0 p-1 dark:bg-blue-950 bg-blue-200 bottom-[62px] font-bold">{`${rating}/10`}</div>;
}


import type { JSX } from "react";

type ShowRatingShikimoriDataSmartXProps = {
    rating: number | null;
};
export function ShowRatingShikimoriDataSmartX({
    rating,
}: ShowRatingShikimoriDataSmartXProps): React.JSX.Element | null {
    if (rating === null) {
        return null;
    }
    if (rating === 0) {
        return null;
    }
    return <div className="  p-1 font-bold">{`${rating}/10`}</div>;
}

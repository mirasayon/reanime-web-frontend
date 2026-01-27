import { BoldX } from "#/components/utilities/common/utility-components";
import type { JSX } from "react";

export function ShowRelationTypeForBothMangaAndAnime({ relation }: { relation: string }): React.JSX.Element {
    return <BoldX className={` p-1 dark:bg-slate-700 bg-slate-300 rounded-xs`}>{relation}</BoldX>;
}
export function ShowImageForRelatedAnimeSection({ url, title }: { url: string; title: string }) {
    return (
        <img
            src={url}
            alt={`Обложка от ${title}`}
            loading="lazy"
            className={`rounded object-cover min-w-[160px] max-w-[160px]`}
        />
    );
}

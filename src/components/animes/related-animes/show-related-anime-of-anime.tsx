import { getTypeOfAnime, getAnimePosterUrlByShikimoriId } from "#/utils/util-functions";
import Link from "next/link";
import type { JSX } from "react";
import { BoldX } from "#/components/utilities/common/utility-components";
import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
export const relatedCardStyles =
    "w-[20rem] text-wrap bg-blue-100 dark:bg-slate-800 hover:bg-blue-200/80 hover:dark:bg-slate-700/80 h-[240px] flex m-1 rounded-sm p-1 text-sm";
import {
    ShowImageForRelatedAnimeSection,
    ShowRelationTypeForBothMangaAndAnime,
} from "./utils-for-related-anime-or-manga-show-component";
type RelatedCardForAnimeProps = { shikimori_id: number; relation: string };
export async function RelatedCardForAnime({
    shikimori_id,
    relation,
}: RelatedCardForAnimeProps): Promise<JSX.Element | null> {
    const data = await getAnyByShikimoriFromKodikApi(shikimori_id);
    if (!data) {
        return null;
    }
    const type = getTypeOfAnime(data.type);
    return (
        <Link href={"/anime/" + data.shikimori_id} className={relatedCardStyles}>
            <ShowImageForRelatedAnimeSection
                title={`Обложка от аниме ${data.title}`}
                url={getAnimePosterUrlByShikimoriId(data.shikimori_id)}
            />

            <div className="m-1 flex flex-col">
                <ShowRelationTypeForBothMangaAndAnime relation={relation} />
                <span>{data.title}</span>
                <span>
                    <BoldX>Тип: </BoldX>
                    {type}
                </span>
                {type === "Сериал" && (
                    <span>
                        <BoldX>Сезон: </BoldX>
                        {data.last_season}
                    </span>
                )}
            </div>
        </Link>
    );
}

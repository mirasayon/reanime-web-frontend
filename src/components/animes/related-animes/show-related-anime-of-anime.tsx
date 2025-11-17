import { getTypeOfAnime, getAnimePosterUrlByShikimoriId } from "#/utils";
import Link from "next/link";
import type { JSX } from "react";
import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import { ShowRelationTypeForBothMangaAndAnime } from "./utils-for-related-anime-or-manga-show-component";
type RelatedCardForAnimeProps = { shiki_id: number; relation: string };
export async function RelatedCardForAnime({ shiki_id, relation }: RelatedCardForAnimeProps): Promise<JSX.Element | null> {
    const data = await getAnyByShikimoriFromKodikApi(shiki_id);
    const type = data ? getTypeOfAnime(data.type) : null;
    return data ? (
        <Link href={"/anime/" + data.shikimori_id} className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-500 rounded-sm p-2">
            <img
                src={getAnimePosterUrlByShikimoriId(data.shikimori_id)}
                alt={`Обложка от аниме ${data.title}`}
                className="rounded-sm object-cover h-[212px] w-[150px]"
            />
            <div className="m-2 flex flex-col">
                <ShowRelationTypeForBothMangaAndAnime relation={relation} />
                <span>{data.title}</span>
                <span>
                    <BoldX>Тип: </BoldX>
                    {type}
                </span>
                {type && type === "Сериал" && (
                    <span>
                        <BoldX>Сезон: </BoldX>
                        {data.last_season}
                    </span>
                )}
            </div>
        </Link>
    ) : null;
}

import { UtilityJSX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { Global_Utilities } from "#/utils/common";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import Link from "next/link";
import type { JSX } from "react";
import { parseTitleNameForAnime } from "#/components/anime_page/parse-name-for-anime.class";
type Props = { shiki_id: number; relation: string };
type RT = Promise<JSX.Element | null>;
export async function RelatedCardForAnime({ shiki_id, relation }: Props): RT {
    const data: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: shiki_id }).catch(() => null);
    return data ? (
        <Link href={Global_Utilities.get_anime_url_by_id_and_type(data)} className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-300 p-2">
            <img
                src={Global_Utilities.get_poster_image_url_by_filename(data.poster_image_for_rea) || UtilityJSX.Default_poster(true)}
                alt={`Обложка от аниме ${parseTitleNameForAnime(data)}`}
                className="rounded-sm object-cover h-[212px] w-[150px]"
            />
            <div className="m-2">
                <UtilityJSX.BoldX>{relation}</UtilityJSX.BoldX>
                <br />
                <span>{parseTitleNameForAnime(data)}</span>
                <br />
                {data.season && <span>{data.season} сезон</span>}
                <br />
                <span>
                    <UtilityJSX.BoldX>Тип: </UtilityJSX.BoldX>
                    {Global_Utilities.get_type_of_anime(data)}
                </span>
            </div>
        </Link>
    ) : null;
}

import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { get_anime_url_by_id_and_type, get_poster_image_url_by_filename, get_type_of_anime } from "#/utils/common";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import Link from "next/link";
import type { JSX } from "react";
import { parseTitleNameForAnime } from "#/components/anime_page/parse-name-for-anime.class";
import { BoldX, Default_poster } from "#/components/utilities/common/assembler-of-utilities.utilx";
type Props = { shiki_id: number; relation: string };
type RT = Promise<JSX.Element | null>;
export async function RelatedCardForAnime({ shiki_id, relation }: Props): RT {
    const data: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: shiki_id }).catch(() => null);
    return data ? (
        <Link href={get_anime_url_by_id_and_type(data)} className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-300 p-2">
            <img
                src={get_poster_image_url_by_filename(data.poster_image_for_rea)}
                alt={`Обложка от аниме ${parseTitleNameForAnime(data)}`}
                className="rounded-sm object-cover h-[212px] w-[150px]"
            />
            <div className="m-2">
                <BoldX>{relation}</BoldX>
                <br />
                <span>{parseTitleNameForAnime(data)}</span>
                <br />
                {data.season && <span>{data.season} сезон</span>}
                <br />
                <span>
                    <BoldX>Тип: </BoldX>
                    {get_type_of_anime(data)}
                </span>
            </div>
        </Link>
    ) : null;
}

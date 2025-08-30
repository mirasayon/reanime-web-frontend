import { get_anime_url_by_id_and_type, get_type_of_anime } from "#/utils/common";
import Link from "next/link";
import type { JSX } from "react";
import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { getAnimePosterUrlByShikimoriId } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { getAnyByShikimoriFromKodikApi } from "#/providers/kodik-api-utils/get-any-by-id";
type Props = { shiki_id: number; relation: string };
type RT = Promise<JSX.Element | null>;
export async function RelatedCardForAnime({ shiki_id, relation }: Props): RT {
    const data = await getAnyByShikimoriFromKodikApi(shiki_id);
    return data ? (
        <Link href={get_anime_url_by_id_and_type(data.type, data.shikimori_id)} className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-300 p-2">
            <img
                src={getAnimePosterUrlByShikimoriId(data.shikimori_id, (await loadEnvFile()).resource_service.url)}
                alt={`Обложка от аниме ${data.title}`}
                className="rounded-sm object-cover h-[212px] w-[150px]"
            />
            <div className="m-2">
                <BoldX>{relation}</BoldX>
                <br />
                <span>
                    <BoldX>Тип: </BoldX>
                    {get_type_of_anime(data.type)}
                </span>
            </div>
        </Link>
    ) : null;
}


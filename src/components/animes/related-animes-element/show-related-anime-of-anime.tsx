import { get_type_of_anime } from "#/utils/common";
import Link from "next/link";
import type { JSX } from "react";
import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { getAnimePosterUrlByShikimoriId } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { getAnyByShikimoriFromKodikApi } from "#/providers/kodik-api-utils/get-any-by-id";
type RelatedCardForAnimeProps = { shiki_id: number; relation: string };
export async function RelatedCardForAnime({ shiki_id, relation }: RelatedCardForAnimeProps): Promise<JSX.Element | null> {
    const data = await getAnyByShikimoriFromKodikApi(shiki_id);
    return data ? (
        <Link href={"/anime/" + data.shikimori_id} className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-300 p-2">
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


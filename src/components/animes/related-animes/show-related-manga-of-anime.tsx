import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { JSX } from "react";
import type { AnimeRelationData } from "shikimoript/types/animes.js";
import { ShowRelationTypeForBothMangaAndAnime } from "./utils-for-related-anime-or-manga-show-component";
import { SiShikimori } from "react-icons/si";
function GetKindManga({ kind }: { kind: (string & {}) | ("light_novel" | "manga") }) {
    if (kind === "manga") {
        return <span>Манга</span>;
    }
    if (kind === "light_novel") {
        return <span>Новелла</span>;
    }
    return <span>{kind}</span>;
}
export const shikimori_base_url = "https://shikimori.one" as const;
export function RelatedCardForManga({ data: manga, relation }: { data: AnimeRelationData["manga"]; relation: string }): JSX.Element | null {
    if (!manga) {
        return null;
    }
    const url = shikimori_base_url + manga.image.original.split("?")[0];
    return (
        <div className="w-[20rem] border-4 h-[240px] flex m-2 border-blue-500/40 rounded-sm p-2">
            <img loading="lazy" src={url} alt={`Обложка от манги ${manga.russian || ""}`} className="rounded-sm object-cover h-[212px] w-[150px]" />
            <div className="m-2 flex flex-col">
                <ShowRelationTypeForBothMangaAndAnime relation={relation} />
                <span>{manga?.russian}</span>
                <span>
                    <BoldX>Тип: </BoldX>
                    <GetKindManga kind={manga.kind} />
                </span>
                <div className=" flex flex-row gap-0">
                    <Linker href={shikimori_base_url + manga.url} className=" hover:underline " linkType="raw">
                        Страница в Шикимори {/* <div> */}
                        <SiShikimori size={20} />
                        {/* </div> */}
                    </Linker>
                    {/* <div>
                        <SiShikimori size={20} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

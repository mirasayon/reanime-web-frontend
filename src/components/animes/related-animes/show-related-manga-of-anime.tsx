import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utility-components";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { AnimeRelationData } from "shikimoript/types/animes.d.ts";
import {
    ShowImageForRelatedAnimeSection,
    ShowRelationTypeForBothMangaAndAnime,
} from "./utils-for-related-anime-or-manga-show-component";
import { SiShikimori } from "react-icons/si";
import { relatedCardStyles } from "./show-related-anime-of-anime";
function GetKindManga({ kind }: { kind: (string & {}) | ("light_novel" | "novel" | "manga") }) {
    if (kind === "manga") {
        return <span>Манга</span>;
    }
    if (kind === "light_novel") {
        return <span>Новелла</span>;
    }
    if (kind === "manhwa") {
        return <span>Манхва</span>;
    }
    if (kind === "one_shot") {
        return <span>Ваншот</span>;
    }
    if (kind === "novel") {
        return <span>Новелла</span>;
    }
    return <span>{kind}</span>;
}
export const shikimori_base_url = "https://shikimori.one" as const;
export function RelatedCardForManga({
    data: manga,
    relation,
}: {
    data: AnimeRelationData["manga"];
    relation: string;
}): React.JSX.Element | null {
    if (!manga) {
        return null;
    }
    const __url = shikimori_base_url + manga.image.original;
    return (
        <div className={relatedCardStyles}>
            <ShowImageForRelatedAnimeSection title={`Обложка от манги ${manga.russian || ""}`} url={__url} />
            <div className="m-1 flex flex-col">
                <ShowRelationTypeForBothMangaAndAnime relation={relation} />
                <span>{manga?.russian}</span>
                <span>
                    <BoldX>Тип: </BoldX>
                    <GetKindManga kind={manga.kind} />
                </span>
                <Linker href={shikimori_base_url + manga.url} className=" hover:underline " linkType="raw">
                    Страница в Шикимори
                    <SiShikimori size={20} />
                </Linker>
            </div>
        </div>
    );
}

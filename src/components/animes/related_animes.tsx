import { rea_wrapper_border } from "#/styles/provider";
import { RelatedCardForManga } from "./related-animes/show-related-manga-of-anime";
import { RelatedCardForAnime } from "./related-animes/show-related-anime-of-anime";
import type { AnimeRelationData } from "shikimoript/types/animes.d.ts";

export function MainRelatedAnimesSection({ related }: { related: AnimeRelationData[] }): React.JSX.Element | null {
    const pass = related && related.length > 0;
    if (!pass) {
        return null;
    }
    return (
        <div className={rea_wrapper_border}>
            <div className="p-2 font-medium">Связанные:</div>
            <div className="flex flex-wrap">
                {related.map((item, ind) => {
                    let valid = false;
                    if (item && item.anime && item.anime.id && item.anime.status !== "anons") {
                        valid = true;
                    }
                    const _index: number = item.manga?.id || item.anime?.id || ind;
                    return (
                        <div key={_index}>
                            {valid && item.anime && (
                                <RelatedCardForAnime relation={item.relation_russian} shikimori_id={item.anime.id} />
                            )}
                            {item?.manga?.id && (
                                <RelatedCardForManga relation={item.relation_russian} data={item.manga} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

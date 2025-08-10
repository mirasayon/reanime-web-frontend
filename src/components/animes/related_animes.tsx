import type { JsonDB } from "@reanime.art/resource-service/types/json-db.js";
import { rea_wrapper_border } from "#/styles/provider";
import { RelatedAnimes } from "#/components/animes/related_anime";
export function Related_animes({ related }: { related: JsonDB.ftype["rels"] }): React.JSX.Element | undefined {
    const pass = related && related.length > 0;
    return !pass ? undefined : (
        <div className={`${rea_wrapper_border} `}>
            <div className="w-max p-2 ml-2 mt-2 rounded-sm dark:bg-slate-800 bg-violet-200">Связанные:</div>
            <div className="flex flex-wrap">
                {related.map((item, ind) => {
                    const _index: number = item.manga?.id || item.anime?.id || ind;
                    return (
                        <div key={_index}>
                            {item?.anime?.id && (
                                <div>
                                    <RelatedAnimes.RelatedCardForAnime relation={item.rel_ru} shiki_id={item.anime.id} />
                                </div>
                            )}
                            {item?.manga?.id && (
                                <div>
                                    <RelatedAnimes.RelatedCardForManga relation={item.rel_ru} data={item.manga} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

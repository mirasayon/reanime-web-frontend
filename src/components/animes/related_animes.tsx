import type { paginatedResponse } from "@reanime/resource-parser/types/animes-db-types/paginated-responce-from-server.types.js";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { rea_wrapper_border } from "#/styles/provider";
import { RelatedAnimes } from "#/components/animes/related_anime";
import { Logger } from "log-it-colored";
export function Related_animes({ related }: { related: IReady_Animes_DB["rels"] }): React.JSX.Element | undefined {
    const pass = related && related.length > 0;

    return !pass ? undefined : (
        <div className={`${rea_wrapper_border} `}>
            <div className="w-max p-2 ml-2 mt-2 rounded-sm dark:bg-slate-800 bg-violet-200">Связанные:</div>
            <div className="flex flex-wrap">
                {related.map((item, ind) => {
                    const valid = item && item.anime && item.anime.id && item.anime.status !== "anons";
                    const _index: number = item.manga?.id || item.anime?.id || ind;
                    return (
                        <div key={_index}>
                            {valid && (
                                <div>
                                    <RelatedAnimes.RelatedCardForAnime relation={item.rel_ru} shiki_id={item.anime!.id} />
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

import { rea_wrapper_border } from "#/styles/provider";
import { RelatedCardForManga } from "./related-animes/show-related-manga-of-anime";
import { RelatedCardForAnime } from "./related-animes/show-related-anime-of-anime";
import type { JSX } from "react";
import type { IShikimoriRelated } from "&rs/shikimori-related.types";

export async function Related_animes({ related }: { related: IShikimoriRelated[] }): Promise<JSX.Element | null> {
    const pass = related && related.length > 0;
    return pass ? (
        <div className={`${rea_wrapper_border} `}>
            <div className="w-max p-2 ml-2 mt-2 rounded-sm dark:bg-slate-800 bg-violet-200">Связанные:</div>
            <div className="flex flex-wrap">
                {related.map((item, ind) => {
                    let valid = false;
                    if (item && item.anime && item.anime.id && item.anime.status !== "anons") {
                        valid = true;
                    }
                    const _index: number = item.manga?.id || item.anime?.id || ind;
                    return (
                        <div key={_index}>
                            {valid && (
                                <div>
                                    <RelatedCardForAnime relation={item.relation_russian} shiki_id={item.anime!.id} />
                                </div>
                            )}
                            {item?.manga?.id && (
                                <div>
                                    <RelatedCardForManga relation={item.relation_russian} data={item.manga} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    ) : null;
}


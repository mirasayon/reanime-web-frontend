import type { JsonDB } from "#T/shared/json_db";
import { rea_wrapper_border } from "#/styles/provider";
import { RelatedAnimes } from "#/components/animes/related_anime";
export function Related_animes({
    related,
    is_dark,
}: {
    related: JsonDB.ftype["rels"];
    is_dark: boolean;
}): React.JSX.Element | undefined {
    return !related ? undefined : (
        <section className={rea_wrapper_border}>
            <span className="m-2">Связанные:</span>
            <div className="flex flex-wrap">
                {related.map((item, ind) => {
                    const _index: number = item.manga?.id || item.anime?.id || ind;
                    return (
                        <div key={_index}>
                            {item?.anime?.id && (
                                <div>
                                    <RelatedAnimes.RelatedCardForAnime
                                        relation={item.rel_ru}
                                        shiki_id={item.anime.id}
                                    />
                                </div>
                            )}
                            {item?.manga?.id && (
                                <div>
                                    <RelatedAnimes.RelatedCardForManga
                                        is_dark={is_dark}
                                        relation={item.rel_ru}
                                        data={item.manga}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

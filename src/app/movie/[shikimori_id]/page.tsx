import { Anime_description } from "#/components/anime_page/anime_description";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Related_animes } from "#/components/animes/related_animes";
import { FramesAnime } from "#/components/animes/frames_anime";
import { Movie_Player_Component } from "#/components/animes/movie_player";
import { Global_Utilities } from "#/utils/functions";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Trailer_Component } from "#/components/animes/promo_content";
import type { JsonDB } from "#T/shared/json_db";
import type { NextJS_Types } from "#T/next";
import { Anime_Series_Utils } from "#/utils/watch";
import { DMCA_Protected } from "#/components/animes/dmca_protected";
import { ResServiceApi } from "#/integrators/resource-service/index";
type Props = {
    params: NextJS_Types.Params<{ shikimori_id: string }>;
    searchParams: NextJS_Types.SearchParams;
};
export default async function __MovieWatchPage({ params, searchParams }: Props) {
    const p = await params;
    const sp = await searchParams;
    const shikimori_id_web = p.shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !Global_Utilities.is_contains_only_numeric_string(shikimori_id_web)) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **
    const movie: JsonDB.ftype | null = await ResServiceApi.core.byid.movie_by_id(current_shikimori_id);
    if (!movie) {
        return notFound();
    }
    const tr_array: JsonDB.ftype["w"] = movie.w;
    let current_ds_id: number = Number(sp.sid) || tr_array[0].sid;
    const is_in_translations: boolean = tr_array.some((item) => item.sid === current_ds_id);
    if (!is_in_translations) {
        current_ds_id = tr_array[0].sid;
    }
    const vid_src: JsonDB.ftype["w"][number] | undefined = tr_array.find((item) => item.sid === current_ds_id);
    if (!vid_src) {
        return notFound();
    }
    return (
        <>
            <Anime_description
                cover_image_src={Global_Utilities.get_poster_image_url_by_filename(movie.img) || UtilityJSX.Default_poster()}
                current_user={null}
                anime={movie}
            />
            <Trailer_Component trailer={movie.promo} />
            {movie.hdp ? <DMCA_Protected /> : <Movie_Player_Component vid_src={vid_src.mov} ds_arrays={tr_array} current_studio_id={current_ds_id} />}
            <FramesAnime title_of_anime={movie.nms.kkru} screenshots={movie.frms} shiki_id={movie.sid} />
            <Related_animes related={movie.rels} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ shikimori_id: string }> }): Promise<Metadata> {
    return await Anime_Series_Utils.setMetadata((await params).shikimori_id);
}

"use server";
import { AnimeDescriptionModule } from "#/components/anime_page/anime-description-module";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Related_animes } from "#/components/animes/related_animes";
import { ShowAnimesScreenshotsComponent } from "#/components/animes/frames_anime";
import { Movie_Player_Component } from "#/components/animes/movie_player";
import { AnimeWatchPagePromoVideos } from "#/components/animes/watch-anime-pages/promo_content";
import type { IReady_Animes_DB } from "@reanime/resource-service/types/animes-db-types/ready-animes.types.js";
import type { NextJS_Types } from "#T/next";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { setMetadataForWatchAnimePage } from "#/utils/anime-watch-pages/set-metadata-for-watch-page";
import { is_contains_only_numeric_string } from "#/utils/common";
import { get_poster_image_url_by_filename } from "#/utils/common/get-poster-url-by-inputted-server-url.dumbx";
import { LoadConfig } from "#/configs/environment-variables.main-config";
type Props = {
    params: NextJS_Types.Params<{ shikimori_id: string }>;
    searchParams: NextJS_Types.SearchParams;
};
export default async function __MovieWatchPage({ params, searchParams }: Props) {
    const p = await params;
    const sp = await searchParams;
    const shikimori_id_web = p.shikimori_id;
    if (Number.isNaN(shikimori_id_web) || !is_contains_only_numeric_string(shikimori_id_web)) {
        return notFound();
    }
    const current_shikimori_id = Number(shikimori_id_web); //* * **
    const movie: IReady_Animes_DB | null = await ResServiceApi.byid.movie_by_id({ shikimori_id: current_shikimori_id });
    if (!movie) {
        return notFound();
    }
    const tr_array: IReady_Animes_DB["w"] = movie.w;
    let current_ds_id: number = Number(sp.sid) || tr_array[0].sid;
    const is_in_translations: boolean = tr_array.some((item) => item.sid === current_ds_id);
    if (!is_in_translations) {
        current_ds_id = tr_array[0].sid;
    }

    const res_url = (await LoadConfig()).partners.resource_service.url;
    const vid_src: IReady_Animes_DB["w"][number] | undefined = tr_array.find((item) => item.sid === current_ds_id);
    if (!vid_src) {
        return notFound();
    }
    return (
        <>
            <AnimeDescriptionModule
                cover_image_src={get_poster_image_url_by_filename(movie.poster_image_for_rea, res_url)}
                current_user={null}
                anime={movie}
            />
            <AnimeWatchPagePromoVideos trailer={movie.promo} />
            <Movie_Player_Component vid_src={vid_src.mov} ds_arrays={tr_array} current_studio_id={current_ds_id} />
            <ShowAnimesScreenshotsComponent
                res_url={res_url}
                title_of_anime={movie.names.kkru}
                screenshots={movie.screenshots_rea}
                shiki_id={movie.sid}
            />
            <Related_animes related={movie.rels} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ shikimori_id: string }> }): Promise<Metadata> {
    return await setMetadataForWatchAnimePage((await params).shikimori_id);
}

import { Ads_in_kodik_is_not_mine } from "#/components/info/show-ads-in-kodik-are-not-mine-text";
import { Localization_Studios_List_Component } from "./translation_studios_list.anime-watch";
import { rea_wrapper_border } from "#/styles/provider";
import type { IReady_Animes_DB } from "&rs/ready-animes.types";

export function Movie_Player_Component({
    vid_src,
    ds_arrays,
    current_studio_id,
}: {
    vid_src: string;
    ds_arrays: IReady_Animes_DB["w"];
    current_studio_id: number;
}) {
    return (
        <section className={`flex flex-col p-2 ${rea_wrapper_border}`} id="play">
            <Localization_Studios_List_Component current_studio_id={current_studio_id} ds_arrays={ds_arrays} />
            <section className="m-2 flex flex-col justify-center items-center flex-wrap " id="play">
                <Ads_in_kodik_is_not_mine />
                <iframe
                    title="плеер"
                    className="min-w-full min-h-[500px]"
                    src={vid_src}
                    allowFullScreen={true}
                    allow="picture-in-picture; fullscreen;"
                />
            </section>
        </section>
    );
}


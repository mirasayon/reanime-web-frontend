"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { AdsRSYA } from "#/components/ads/yandex_ads";
import { Utils } from "#/utils/functions";
import { useState } from "react";
export function FramesAnime({
    title_of_anime,
    shiki_id,
    is_dark,
    screenshots,
}: {
    shiki_id: number;
    screenshots: string[];
    is_dark: boolean;
    title_of_anime: string;
}) {
    const [is_extended, set_extended] = useState(false);
    const img_height = 360 / 1.5; //240 // 720 / 2;
    const img_width = 640 / 1.5; // 1280 / 2;
    return (
        <section className={`p-2 ${rea_wrapper_border} flex flex-col justify-center items-center`}>
            <span className="text-lg px-3">Кадры</span>

            <div
                className={`flex flex-wrap justify-evenly overflow-hidden  ${
                    is_extended ? "h-max" : "h-[240px]"
                }`}
            >
                {screenshots.map((img_url, ind) => {
                    const alt_string: string = `кадры от ${title_of_anime}, N-${ind + 1}`;
                    const img_src = img_url.split("?")[0];
                    return (
                        <img
                            className="p-2 object-cover"
                            height={img_height}
                            key={img_url}
                            width={img_width}
                            src={Utils.ReaScreenshots(img_src, shiki_id)}
                            alt={alt_string}
                        />
                    );
                })}
                <div className={"p-2 "}>
                    <div className={"block min-w-[640px]"}>
                        <AdsRSYA.BannerInFrames is_dark={is_dark} />
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="p-2 m-2 bg-slate-800 hover:bg-slate-700 rounded-lg w-32 text-center cursor-pointer"
                onClick={() => set_extended((pr) => !pr)}
                title="Раскрыть"
            >
                {is_extended ? "Свернуть" : "Раскрыть"} все
            </button>
        </section>
    );
}

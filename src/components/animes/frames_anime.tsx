import { rea_wrapper_border } from "#/styles/provider";
import { AdsRSYA } from "#/components/ads/yandex_ads";
import { Utils } from "#/utils/functions";
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
    const img_height: number = 360; // 720 / 2;
    const img_width: number = 640; // 1280 / 2;
    return (
        <section className={`p-2 ${rea_wrapper_border}`}>
            <span className="text-lg px-3">Кадры</span>
            <div className="flex flex-row overflow-scroll scrollbar ">
                {screenshots.map((img_url, ind) => {
                    const alt_string: string = `кадры от ${title_of_anime}, N-${ind + 1}`;
                    const img_src = img_url.split("?")[0];
                    return (
                        <img
                            className="p-2 flex"
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
        </section>
    );
}

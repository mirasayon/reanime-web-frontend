import { rea_wrapper_border } from "#/styles/provider";
import { Global_Utilities } from "#/utils/common";
export function FramesAnime({ title_of_anime, shiki_id, screenshots }: { shiki_id: number; screenshots: string[]; title_of_anime: string }) {
    const is_extended = true;
    const img_height = 360 / 1.5; //240 // 720 / 2;
    const img_width = 640 / 1.5; // 1280 / 2;
    return (
        <section className={`p-2 ${rea_wrapper_border} flex flex-col justify-center items-center`}>
            <span className="text-lg px-3">Кадры</span>
            <div
                className={`flex flex-wrap justify-evenly overflow-y-scroll scrollbar 
                        ease-in-out duration-400  
                    ${is_extended ? "h-[720px]" : "h-[240px]"}`}
            >
                {screenshots.map((img_url, ind) => {
                    const alt_string: string = `кадры от ${title_of_anime}, N-${ind + 1}`;
                    const img_src = img_url.split("?")[0];
                    return (
                        <img
                            className="p-2 object-contain"
                            height={img_height}
                            key={img_url}
                            width={img_width}
                            src={Global_Utilities.get_anime_frame_image_url(img_src, shiki_id)}
                            alt={alt_string}
                        />
                    );
                })}
            </div>
        </section>
    );
}

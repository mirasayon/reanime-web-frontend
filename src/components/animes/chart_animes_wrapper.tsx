import { TopChartCarousel } from "./top_chart_animes_slider";
import type { i_top_charts_anime_json } from "#T/userinserface";
import { Global_Utilities } from "#/utils/functions";

export function ChartCarouselWrapper({
    animes,
    render_images = true,
}: {
    render_images?: boolean;
    animes: i_top_charts_anime_json[];
}) {
    return (
        <TopChartCarousel autoSlide={true} interval={10000}>
            {animes.map((one_slide, slide_index) => {
                return (
                    <div key={one_slide.page_url}>
                        <a href={one_slide.page_url} className={"flex w-screen text-sm"}>
                            {render_images ? (
                                <img
                                    height={200}
                                    loading={"lazy"}
                                    alt={` ${one_slide.title}'s cover`}
                                    src={Global_Utilities.set_top_chart_animes_image_url(
                                        one_slide.cover,
                                    )}
                                    className={"h-[300px] object-cover object-top w-max "}
                                />
                            ) : (
                                <div className={"h-[300px] flex justify-center p-8 text-4xl  "}>
                                    {slide_index}
                                </div>
                            )}
                            <section
                                className={
                                    "m-1 h-[300px] text-wrap p-1 w-[50%] overflow-y-scroll flex flex-col"
                                }
                            >
                                <h1 className={"text-lg h-max font-bold"}>{one_slide.title}</h1>
                                <div>{one_slide.description}</div>
                            </section>
                        </a>
                    </div>
                );
            })}
        </TopChartCarousel>
    );
}

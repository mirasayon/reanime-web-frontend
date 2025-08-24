"use client";
import type { i_top_charts_anime_json } from "#T/userinserface.types";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "#/shadcn-ui/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { set_top_chart_animes_image_urlByUrl } from "#/utils/common/get-top-chart-poster-url-by-inputted-server-url.dumbx";
type AnimeMainPageCarouselProps = {
    animes: i_top_charts_anime_json[];
    resServerUrl: string;
};

export function AnimeMainPageCarousel({ resServerUrl, animes }: AnimeMainPageCarouselProps) {
    return (
        <div className="lg:mx-45 mx-18">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent>
                    {animes.map((one_slide) => {
                        return (
                            <CarouselItem key={one_slide.page_url} className=" ">
                                {/* <div> */}
                                <Link href={one_slide.page_url} className={"flex  flex-row"}>
                                    <div
                                        className=" "
                                        style={{
                                            backgroundPosition: "top center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("${set_top_chart_animes_image_urlByUrl(one_slide.cover, resServerUrl)}")`,
                                        }}
                                    >
                                        <div className={"flex flex-col gap-44  p-2 overflow-y-scroll  bg-zinc-950/50 h-[350px] scrollbar "}>
                                            <div className={"text-lg font-bold"}>{one_slide.title}</div>
                                            <div className="  ">
                                                {one_slide.description.length > 300
                                                    ? one_slide.description.slice(0, 300) + "..."
                                                    : one_slide.description}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                {/* </div> */}
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
            </Carousel>
        </div>
    );
}

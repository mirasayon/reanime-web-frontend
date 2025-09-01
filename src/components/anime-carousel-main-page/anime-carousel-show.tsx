"use client";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "#/shadcn-ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { set_top_chart_animes_image_urlByUrl } from "#/utils";
import type { IStaticTopChartAnimes } from "&rs/internal-statics";
type AnimeMainPageCarouselProps = {
    animes: IStaticTopChartAnimes[];
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
                            <CarouselItem key={one_slide.shikimori_id} className="text-white dark:text-white ">
                                <Link href={"/anime/" + one_slide.shikimori_id} className={"flex  flex-row"}>
                                    <div
                                        className=" "
                                        style={{
                                            backgroundPosition: "top center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("${set_top_chart_animes_image_urlByUrl(one_slide.cover)}")`,
                                        }}
                                    >
                                        <div
                                            className={
                                                "flex flex-col gap-44  p-2 overflow-y-scroll  dark:bg-zinc-950/50 bg-zinc-950/30 h-[350px] scrollbar "
                                            }
                                        >
                                            <div className={"text-lg font-bold"}>{one_slide.title}</div>
                                            <div className="  ">
                                                {one_slide.description.length > 300
                                                    ? one_slide.description.slice(0, 300) + "..."
                                                    : one_slide.description}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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


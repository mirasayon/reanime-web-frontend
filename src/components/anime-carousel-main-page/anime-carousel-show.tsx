"use client";
import type { i_top_charts_anime_json } from "#T/userinserface.types";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "#/shadcn-ui/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { set_top_chart_animes_image_urlByUrl } from "#/utils/common/get-top-chart-poster-url-by-inputted-server-url.dumbx";
type Props = {
    animes: i_top_charts_anime_json[];
    resServerUrl: string;
};

export function AnimeMainPageCarousel({ resServerUrl, animes }: Props) {
    return (
        <div>
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
                            <CarouselItem key={one_slide.page_url}>
                                <div className="  ">
                                    <Link href={one_slide.page_url} className={"flex text-sm"}>
                                        <img
                                            height={200}
                                            loading={"eager"}
                                            alt={` ${one_slide.title}'s cover`}
                                            src={set_top_chart_animes_image_urlByUrl(one_slide.cover, resServerUrl)}
                                            className={"h-[250px] object-contain w-max "}
                                        />
                                        <div className={"m-1 h-[250px] overflow-y-scroll scrollbar text-wrap p-1 flex flex-col"}>
                                            <div className={"text-lg h-max font-bold"}>{one_slide.title}</div>
                                            <div>{one_slide.description}</div>
                                        </div>
                                    </Link>
                                </div>
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

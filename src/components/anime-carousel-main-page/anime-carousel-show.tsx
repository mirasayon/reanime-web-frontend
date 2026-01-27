"use client";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { topAnimesPosterImageUrl } from "#/utils";
import type { IStaticTopChartAnimes } from "#/constants/anime-genres/internal-statics";
import type React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";
type AnimeMainPageCarouselProps = {
    animes: IStaticTopChartAnimes[];
};

export function AnimeHomePageCarousel({ animes }: AnimeMainPageCarouselProps) {
    return (
        <div className="lg:mx-45 mx-18">
            <CarouselShadCN
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
                <CarouselContentShadCN>
                    {animes.map((one_slide) => {
                        return (
                            <CarouselItemShadCN key={one_slide.shikimori_id} className="text-white dark:text-white ">
                                <Link href={"/anime/" + one_slide.shikimori_id} className={"flex  flex-row"}>
                                    <div
                                        className=" "
                                        style={{
                                            backgroundPosition: "top center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("${topAnimesPosterImageUrl(one_slide.cover)}")`,
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
                            </CarouselItemShadCN>
                        );
                    })}
                </CarouselContentShadCN>
                <CarouselPreviousShadCN className="cursor-pointer" />
                <CarouselNextShadCN className="cursor-pointer" />
            </CarouselShadCN>
        </div>
    );
}

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }

    return context;
}

function CarouselShadCN({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div"> & CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
        if (!api) return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext],
    );

    useEffect(() => {
        if (!api || !setApi) return;
        setApi(api);
    }, [api, setApi]);

    useEffect(() => {
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);

        return () => {
            api?.off("select", onSelect);
        };
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }}
        >
            <div
                onKeyDownCapture={handleKeyDown}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                data-slot="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

function CarouselContentShadCN({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
            <div
                className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
                {...props}
            />
        </div>
    );
}

function CarouselItemShadCN({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const { orientation } = useCarousel();

    return (
        <div
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className,
            )}
            {...props}
        />
    );
}

function CarouselPreviousShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof ButtonComponent>) {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
        <ButtonComponent
            data-slot="carousel-previous"
            className={cn(
                "absolute size-8 rounded-full",
                orientation === "horizontal"
                    ? "top-1/2 -left-12 -translate-y-1/2"
                    : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                className,
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft />
            <span className="sr-only">Previous slide</span>
        </ButtonComponent>
    );
}

function CarouselNextShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof ButtonComponent>) {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
        <ButtonComponent
            data-slot="carousel-next"
            className={cn(
                "absolute size-8 rounded-full",
                orientation === "horizontal"
                    ? "top-1/2 -right-12 -translate-y-1/2"
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                className,
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight />
            <span className="sr-only">Next slide</span>
        </ButtonComponent>
    );
}

const STYLE_BTN =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2 cursor-pointer";

function ButtonComponent({ className, ...props }: ComponentProps<"button">) {
    return <button data-slot="button" className={STYLE_BTN + " " + className} {...props} />;
}

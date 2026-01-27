"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCarouselAnimePosterUrl } from "#/utils/util-functions";
import type { IStaticTopChartAnimes } from "#/constants/anime-genres/internal-statics";
type Props = {
    animes: IStaticTopChartAnimes[];
    autoplayDelay?: number;
};
const BTN_STYLES =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -translate-y-1/2 cursor-pointer z-10";

export function AnimeHomePageCarousel({ animes, autoplayDelay = 10000 /* 10s delay */ }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === animes.length - 1 ? 0 : prev + 1));
    }, [animes.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? animes.length - 1 : prev - 1));
    }, [animes.length]);
    useEffect(() => {
        if (isPaused) {
            return;
        }
        const timer = setInterval(nextSlide, autoplayDelay);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <div className="lg:mx-40 mx-18">
            <div
                className="relative group"
                onMouseEnter={(e) => {
                    e.preventDefault();
                    setIsPaused(true);
                }}
                onMouseLeave={(e) => {
                    e.preventDefault();
                    setIsPaused(false);
                }}
                role="region"
                aria-roledescription="carousel"
            >
                <div className="overflow-hidden rounded-md">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {animes.map((slide) => (
                            <div
                                key={slide.shikimori_id}
                                className="min-w-full shrink-0 grow-0 basis-full text-white dark:text-white"
                            >
                                <Link href={"/anime/" + slide.shikimori_id} className="flex flex-row">
                                    <div
                                        className="w-full"
                                        style={{
                                            backgroundPosition: "top center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("${getCarouselAnimePosterUrl(slide.cover)}")`,
                                        }}
                                    >
                                        <div className="flex flex-col gap-44 p-2 overflow-y-scroll dark:bg-zinc-950/50 bg-zinc-950/30 h-[350px] scrollbar">
                                            <div className="text-lg font-bold">{slide.title}</div>
                                            <div>
                                                {slide.description.length > 300
                                                    ? slide.description.slice(0, 300) + "..."
                                                    : slide.description}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={BTN_STYLES + " -left-12"} onClick={prevSlide} aria-label="Предыдущий слайд">
                    <ArrowLeft />
                </button>
                <button className={BTN_STYLES + " -right-12"} onClick={nextSlide} aria-label="Следующий слайд">
                    <ArrowRight />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2 p-2">
                    {animes.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 rounded-full hover:bg-blue-500 cursor-pointer ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

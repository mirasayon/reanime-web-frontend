"use client";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export function TopChartCarousel({
    children,
    autoSlide = false,
    interval,
}: {
    interval: number;
    children: React.ReactNode[];
    autoSlide: boolean;
}): React.JSX.Element {
    const [current_index, set_current_index] = useState<number>(0);
    const [is_invert, set_invert] = useState<boolean>(false);
    const is_start = current_index === 0;
    const is_over = current_index === children.length - 1;
    const new_index = is_over ? 0 : current_index + 1;
    const prev_index = is_start ? children.length - 1 : current_index - 1;
    useEffect(() => {
        if (current_index === children.length - 1) {
            set_invert(() => true);
        }
        if (current_index === 0) {
            set_invert(() => false);
        }
    }, [current_index, children]);

    useEffect(() => {
        if (!autoSlide) {
            return;
        }
        const slideIntervalID = setInterval(() => {
            set_current_index(is_invert ? prev_index : new_index);
        }, interval);
        return (): void => clearInterval(slideIntervalID);
    }, [autoSlide, prev_index, new_index, is_invert, interval]);

    return (
        <div className="overflow-hidden scrollbar h-[300px] group relative m-2 ">
            <div
                className="flex w-max transition-transform ease-out duration-1000"
                style={
                    {
                        "--currentIndex": current_index,
                        transform: "translateX(calc(-100vw * var(--currentIndex, 0)))",
                    } as Record<string, string | number>
                }
            >
                {children}
            </div>
            <button
                type="button"
                disabled={is_start}
                onClick={(e) => {
                    e.preventDefault();
                    set_current_index(prev_index);
                }}
                className="hidden group-hover:block p-1 absolute top-[30%] left-2 rounded-full shadow-sm bg-white/20 text-gray-800 hover:bg-white/70"
            >
                <BsChevronCompactLeft size={60} />
            </button>
            <button
                disabled={is_over}
                onClick={(e) => {
                    e.preventDefault();
                    set_current_index(new_index);
                }}
                type="button"
                className="hidden group-hover:block p-1 absolute top-[30%] right-2 rounded-full shadow-sm bg-white/20 text-gray-800 hover:bg-white/70"
            >
                <BsChevronCompactRight size={60} />
            </button>
        </div>
    );
}

"use client";
const _width = 200 * 1.5;
const _height = 300 * 1.5;
import { useCurrentTheme } from "../themes/get-current-theme";

export function AnimePosterImage({ anime_title, image_src }: { anime_title: string; image_src: string }) {
    const { is_dark } = useCurrentTheme();
    return (
        <>
            <img
                loading="lazy"
                src={image_src}
                alt={anime_title}
                style={{
                    backgroundImage: "url(/_assets/on_error_image_for_night_theme.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
                className={`pr-5 w-[${_width}px] h-[${_height}px] object-cover ${!is_dark && "hidden"}`}
                width={_width}
                height={_height}
            />

            <img
                loading="lazy"
                src={image_src}
                alt={anime_title}
                style={{
                    backgroundImage: "url(/_assets/on_error_image_for_light_theme.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
                className={`pr-5 w-[${_width}px] h-[${_height}px] object-cover ${is_dark && "hidden"}`}
                width={_width}
                height={_height}
            />
        </>
    );
}

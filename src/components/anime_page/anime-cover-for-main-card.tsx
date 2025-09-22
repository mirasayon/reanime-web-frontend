"use client";
const _width = 200;
const _height = 270;
import { useCurrentTheme } from "../themes/get-current-theme";
export function AnimePosterImageForMainCard({ anime_title, image_src }: { anime_title: string; image_src: string }) {
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
                className={`object-cover bg-cover bg-center h-[270px] w-[200px] max-[600px]:w-[150px] max-[600px]:h-[220px] ${!is_dark && "hidden"}`}
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
                className={`object-cover bg-cover bg-center h-[270px] w-[200px] max-[600px]:w-[150px] max-[600px]:h-[220px] ${is_dark && "hidden"}`}
                width={_width}
                height={_height}
            />
        </>
    );
}


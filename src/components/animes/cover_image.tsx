export function CoverImage({ anime_title, image_src }: { anime_title: string; image_src: string }) {
    const _width = 200 * 1.5;
    const _height = 300 * 1.5;
    return (
        <img
            loading="lazy"
            src={image_src}
            alt={anime_title}
            className={`pr-5 w-[${_width}px] h-[${_height}px] object-cover`}
            width={_width}
            height={_height}
        />
    );
}

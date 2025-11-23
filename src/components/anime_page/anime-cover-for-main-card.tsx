const variants = [
    {
        className: "hidden dark:block",
        bg: "/_assets/on_error_image_for_night_theme.png",
    },
    {
        className: "dark:hidden",
        bg: "/_assets/on_error_image_for_light_theme.png",
    },
];

export function AnimePosterImageForMainCard({
    anime_title,
    imgSrc,
}: {
    anime_title: string;
    imgSrc: string;
}) {
    return (
        <>
            {variants.map(({ className, bg }) => (
                <img
                    key={bg}
                    loading="lazy"
                    src={imgSrc}
                    alt={anime_title}
                    className={`${" w-35 h-60 flex object-cover bg-cover  "} ${className}`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}
                />
            ))}
        </>
    );
}

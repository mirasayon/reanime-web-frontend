import { websiteConstants } from "#/configs/website-constants";
import type { Metadata } from "next/types";

export const rootLayoutMetadata: Metadata = {
    title: `Смотреть аниме онлайн бесплатно на сайте ${websiteConstants.public_domain}`,
    description: `${websiteConstants.normalized_name} — смотреть аниме онлайн бесплатно. Вот уже много лет японская анимация  пользуется огромным 
    успехом по всему миру,  включая Россию. Эти ленты  любят за яркий сюжет,   оригинальную рисовку и неизменный накал эмоций.
    Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться
    несколькими источниками, поскольку ни один из них нельзя назвать универсальным.   Но у нас есть отличная новость 
    для любителей аниме! Мы запустили новый проект ${websiteConstants.normalized_name}, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить
    просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.
    Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.
    ${websiteConstants.normalized_name} - Смотри аниме тут`,
    keywords: [
        "аниме",
        "anime",
        websiteConstants.public_domain,
        websiteConstants.public_full_domain,
        websiteConstants.mail,
        websiteConstants.name,
        "смотреть аниме онлайн",
        "смотреть аниме",
        websiteConstants.cyrillic_name,
        websiteConstants.cyrillic_normalized_name,
    ],
    icons: {
        apple: `${websiteConstants.public_full_domain}/apple-icon.png`,
        icon: `${websiteConstants.public_full_domain}/icon.png`,
    },
    openGraph: {
        title: websiteConstants.normalized_name,
        url: websiteConstants.public_full_domain,
        images: `${websiteConstants.public_full_domain}/favicon.ico`,
        locale: "ru_RU",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: websiteConstants.full_domain_URL,
};

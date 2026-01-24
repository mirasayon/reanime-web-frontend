import { websiteConstants } from "#/configs/website-constants";
import type { Metadata } from "next/types";

export const layoutMetadata: Metadata = {
    title: `Смотреть аниме онлайн — ${websiteConstants.public_domain}`,
    description: `${websiteConstants.normalized_name} — бесплатный сайт для просмотра аниме онлайн`,
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

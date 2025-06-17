import { WebsiteConfigs } from "#/configs/website";

const json_ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    publisher: {
        "@type": "Organization",
    },
    name: "Reanime",
    image: "https://reanime.art/icon.png",
    description: `Смотреть аниме онлайн бесплатно на сайте ${WebsiteConfigs.public_domain}`,
};

export const JsonLDStr = JSON.stringify(json_ld);

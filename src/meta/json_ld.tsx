import { WebsiteConfigs } from "#/configs/website";
import { JSX } from "react";

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

const JsonLDStr = JSON.stringify(json_ld);
/** HTML Meta Element  */
export function HtmlElementForJsonLD(): JSX.Element {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JsonLDStr }} />;
}

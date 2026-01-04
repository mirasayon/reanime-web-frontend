import { websiteConstants } from "#/configs/website-constants";
import type { JSX } from "react";

const json_ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    publisher: {
        "@type": "Organization",
    },
    name: "Reanime",
    image: "https://reanime.art/icon.png",
    description: `Смотреть аниме онлайн бесплатно на сайте ${websiteConstants.public_domain}`,
};

const JsonLDStr = JSON.stringify(json_ld);
/** HTML Meta Element  */
export function HtmlElementForJsonLD(): React.JSX.Element {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JsonLDStr }} />;
}

import { WebsiteConfigs } from "#/configs/website";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: WebsiteConfigs.public_domain,
        short_name: WebsiteConfigs.name,
        description: "Веб платформа для просмотра аниме",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        orientation: "any",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    } satisfies MetadataRoute.Manifest;
}

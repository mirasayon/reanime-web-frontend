import { WebsiteConfigs } from "#/configs/website";
import type { MetadataRoute } from "next";
const root = WebsiteConfigs.public_full_domain;
export default function sitemap(): MetadataRoute.Sitemap {
    const lm = new Date();
    return [
        {
            url: root,
            lastModified: lm,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${root}/list`,
            lastModified: lm,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${root}/genres`,
            lastModified: lm,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${root}/m`,
            lastModified: lm,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${root}/s`,
            lastModified: lm,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${root}/right`,
            lastModified: lm,
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ] satisfies MetadataRoute.Sitemap;
}
